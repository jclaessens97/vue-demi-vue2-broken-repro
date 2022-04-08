# vue demi no render or template function repro

`cd lib && npm i && npm run build && npm link && cd ../vue2 && npm i && cd ../vue3 && npm i && cd ..`

Start vue3:
`cd vue3 && npm link lib && npm run dev`

Start vue2:
`cd vue3 && npm link lib && npm run serve`
