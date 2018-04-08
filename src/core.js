import { parse } from 'babylon';
import generate from 'babel-generator';
import traverse from 'babel-traverse';
import { throws } from 'assert';
const babelTypes = require('@babel/types');

const uuidv1 = require('uuid/v1');

const options = {
  sourceType: 'module',
  plugins: [
    // enable jsx syntax
    'jsx',
    'classProperties',
    'flow',
    'doExpressions',
    'objectRestSpread'
  ]
};

function generateStyleSheet(styleNames, styleProperties) {
  return babelTypes.variableDeclaration('const', [
    babelTypes.variableDeclarator(
      babelTypes.identifier('styles'),
      babelTypes.callExpression(
        babelTypes.memberExpression(
          babelTypes.identifier('StyleSheet'),
          babelTypes.identifier('create')
        ),
        [
          babelTypes.objectExpression(
            styleNames.map((item, index) => {
              return babelTypes.objectProperty(
                babelTypes.identifier(item),
                styleProperties[index]
              );
            })
          )
        ]
      )
    )
  ]);
}

function generateAST(code) {
  let ast;
  try {
    ast = parse(code, options);
  } catch (error) {
    console.log(error);
    return 'Oops!! error parsing the tree';
  }
  return ast;
}

// adds styles.styleName to inline styling
function generateStyles(styleName) {
  return babelTypes.jsxAttribute(
    babelTypes.jsxIdentifier('style'),
    babelTypes.jsxExpressionContainer(
      babelTypes.memberExpression(
        babelTypes.identifier('styles'),
        babelTypes.identifier(styleName)
      )
    )
  );
}

function isStyle(name) {
  return name === 'style';
}

function isJSXAttribute(type) {
  return type === 'JSXAttribute';
}

export function convertCode(code) {
  // console.log(code);
  // console.log(typeof code);
  let codeToReturn = '';
  let ast = generateAST(code);
  if (ast === 'Oops!! error parsing the tree') {
    return ast;
  }
  // console.log(ast);
  let objectExpressionArray = []; // stores style object to put in stylesheet.create
  let styleNames = []; // style names
  let nodesToReplace = []; // nodes to replace
  traverse(ast, {
    enter(path) {
      if (isJSXAttribute(path.node.type)) {
        if (isStyle(path.node.name.name)) {
          nodesToReplace.push(path);
          const styleName = uuidv1();
          styleNames.push(styleName);
          objectExpressionArray.push(path.node.value.expression);
        }
      }
    }
  });
  if (objectExpressionArray.length > 0) {
    const generatedStyleSheet = generateStyleSheet(
      styleNames,
      objectExpressionArray
    );

    console.log('----STYLESHEET-----');
    const stylesheet = generate(generatedStyleSheet).code;
    codeToReturn = `//----STYLESHEET----- \n ${stylesheet}`;
    console.log(codeToReturn);

    // replacing style object
    nodesToReplace.forEach((styleNode, index) => {
      let replaceWithThis = generateStyles(styleNames[index]);
      styleNode.replaceWith(replaceWithThis);
    });
  }

  const output = generate(ast);
  console.log('---CODE---');
  const outputcode = output.code;
  codeToReturn = codeToReturn + `\n//----CODE----\n${outputcode}`;
  console.log(codeToReturn);
  return codeToReturn;
}
