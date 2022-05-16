const initialNodes = [
  {
    id: '1',
    type: 'input',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'Node 0 id:1' },
    position: { x: 250, y: 5 },
    className: 'light',
  },
  {
    id: '2',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'Group A id:2', isGroup: true },
    position: { x: 100, y: 100 },
    className: 'light',
    style: { backgroundColor: '#DADADA', width: 200, height: 200 },
  },
  {
    id: '22',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'Group A id:2', isGroup: true },
    position: { x: 100, y: 400 },
    className: 'light',
    style: { backgroundColor: '#D1D4D8', width: 200, height: 200 },
  },
  {
    id: '2a',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'Node A.1 id:2a' },
    position: { x: 10, y: 50 },
    parentNode: '2',
  },
  {
    id: '3',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'Node 1 id:3' },
    position: { x: 320, y: 100 },
    className: 'light'
  },
  {
    id: '4a',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'Node B.1' },
    position: { x: 15, y: 65 },
    className: 'light',
  },
  {
    id: '614963a1-cfd7-4208-9607-548759b9994d',
    data: {
      label: 'Node B.1',
      target: [
        {id:'614963a1-cfd7-4208-9607-548759b9994d123',color: '#123456',name:'test'},
        {id:'614963a1-cfd7-4208-9607-548759b9994dasd',color: '#728F00',name:'test2'}
      ],
      source: [
        {id:'614963a1-cfd7-4208-9607-qwe',color: '#123456',name:'test'},
        {id:'614963a1-cfd7-4208-9607-zxc',color: '#728F00',name:'test2'},
        {id:'614963a1-cfd7-4208-9607-zx3',color: '#338F33',name:'test3'},
      ],
    },
    position: { x: 15, y: 65 },
    className: 'light',
    type: 'customNode'
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e3-4', source: '3', target: '4' },
];

export {initialNodes, initialEdges};
