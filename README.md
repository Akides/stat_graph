# stat_graph
A simple script which creates a radar graph.

This project uses browserify to include chart.js node.js module.
Generate bundle.js with: `node .\node_modules\browserify\bin\cmd.js src\index.js -o src\bundle.js`

index.html needs bundle.js as script file and not index.js.
