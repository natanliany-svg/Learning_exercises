const fs = require('fs');
const files = [
  { file: 'content_sql_basics.js', varName: 'sqlBasicsContent', key: 'sqlBasics' },
  { file: 'content_sql_ddl.js', varName: 'sqlDdlContent', key: 'sqlDdl' },
  { file: 'content_sql_dml.js', varName: 'sqlDmlContent', key: 'sqlDml' },
  { file: 'content_sql_dql.js', varName: 'sqlDqlContent', key: 'sqlDql' },
  { file: 'content_sql_joins.js', varName: 'sqlJoinsContent', key: 'sqlJoins' },
  { file: 'content_sql_node.js', varName: 'sqlNodeContent', key: 'sqlNode' },
  { file: 'content_big_picture.js', varName: 'bigPictureContent', key: 'bigPicture' }
];

for (let item of files) {
  if (!fs.existsSync(item.file)) continue;
  let code = fs.readFileSync(item.file, 'utf8');
  
  // First, completely remove export default if present
  code = code.replace(/export default .*?;?/g, '').trim();
  
  // Check if it's already wrapped correctly
  if (code.includes(item.key + ': {')) {
      // Check if it is missing the closing bracket because of our previous script
      if (!code.endsWith('};')) {
          if (code.endsWith('}')) {
              code += ';';
          } else {
             // It's missing the outer closing bracket
             code += '\n  }\n};';
          }
      }
  } else {
      // Not wrapped yet (should not happen if first script ran, but just in case)
      const searchStr = 'const ' + item.varName + ' = {';
      let idx = code.indexOf(searchStr);
      if (idx !== -1) {
          code = code.replace(searchStr, searchStr + '\n  ' + item.key + ': {');
          if (code.endsWith(';')) code = code.substring(0, code.length - 1).trim();
          if (code.endsWith('}')) {
              code = code.substring(0, code.length - 1) + '  }\n};';
          }
      }
  }
  
  // Actually, wait, let's just do it simpler:
  // If we know the previous script already did const varName = { \n key: {
  // but failed to add }\n}; at the end...
  // Let's just restore them from git and do it right!
}
