export const data = {
  id: 0,
  children: [
    {
      id: 1,
      name: "root node",
      children: [
        {
          id: 1.1,
          name: "node 1 level 1",
          children: [
            { id: 11.1, name: "node 1_1 level 2", children: [] },
            { id: 11.2, name: "node 1_2 level 2", children: [] },
            { id: 11.3, name: "node 1_3 level 2", children: [] },
          ],
        },
        {
          id: 1.2,
          name: "node 2 level 1",
          children: [
            { id: 12.1, children: [] },
            { id: 12.2, children: [] },
            { id: 12.3, children: [] },
          ],
        },
      ],
    },
    {
      id: 2,
      children: [
        {
          id: 2.1,
          children: [
            { id: 21.1, children: [] },
            { id: 21.2, children: [] },
            { id: 21.3, children: [] },
          ],
        },
        {
          id: 2.2,
          children: [
            { id: 22.1, children: [] },
            { id: 22.2, children: [] },
            { id: 22.3, children: [] },
          ],
        },
      ],
    },
    {
      id: 3,
      children: [
        {
          id: 3.1,
          children: [
            { id: 31.1, children: [] },
            { id: 31.2, children: [] },
          ],
        },
        {
          id: 3.2,
          children: [{ id: 32.1, children: [] }],
        },
      ],
    },
  ],
};
