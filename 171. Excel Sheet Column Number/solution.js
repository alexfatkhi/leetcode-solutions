var titleToNumber = function(columnTitle) {
    let value = 0;
    for(let i = 0; i<columnTitle.length; i++){
        let temporary = columnTitle[i].charCodeAt(0) - 64;
        value = value*26 + temporary
    }
    return value
};





{
	"Print to console": {
	  "prefix": "cl",
	  "scope": "javascript,typescript,javascriptreact",
	  "body": ["console.log($1)"],
	  "description": "console.log"
	},
	"reactComponent": {
	  "prefix": "rfc",
	  "scope": "javascript,typescript,javascriptreact",
	  "body": [
		"function ${1:${TM_FILENAME_BASE}}() {",
		"\treturn (",
		"\t\t<div>",
		"\t\t\t$0",
		"\t\t</div>",
		"\t)",
		"}",
		"",
		"export default ${1:${TM_FILENAME_BASE}}",
		""
	  ],
	  "description": "React component"
	},
	"reactStyledComponent": {
	  "prefix": "rsc",
	  "scope": "javascript,typescript,javascriptreact",
	  "body": [
		"import styled from 'styled-components'",
		"",
		"const Styled${TM_FILENAME_BASE} = styled.$0``",
		"",
		"function ${TM_FILENAME_BASE}() {",
		"\treturn (",
		"\t\t<Styled${TM_FILENAME_BASE}>",
		"\t\t\t${TM_FILENAME_BASE}",
		"\t\t</Styled${TM_FILENAME_BASE}>",
		"\t)",
		"}",
		"",
		"export default ${TM_FILENAME_BASE}",
		""
	  ],
	  "description": "React styled component"
	},
	"importCSSModule": {
    "prefix": "csm",
    "scope": "javascript,typescript,javascriptreact",
    "body": ["import styles from './${TM_FILENAME_BASE}.module.css'"],
    "description": "Import CSS Module as `styles`"
  },
  }
  