export default function (context) {
  return {
	VariableDeclaration(node){
     console.log(node);
     let typeOfVar=typeof(node.declarations[0].init.value);
      let nameOfVar=node.declarations[0].id.name
	 node.kind!=="const"?context.report({
       node:node,
       message:"Variable tiene que ser constante",
     })
     	:typeOfVar!=="number"?context.report({
       node:node,
       message:"La variable tiene que ser de tipo númerica",
     }):nameOfVar!==nameOfVar.toUpperCase()?
       context.report({
       node:node,
       message:"Los nombres de las variables tienen que ser en mayusculas"
     }):1
    }
}
}