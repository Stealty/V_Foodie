const classes = (styles) => {
  let classesNames = [];

  const add = (className) => {
    if (styles[className]) classesNames.push(styles[className]);
  };

  const remove = (className) =>
    (classesNames = classesNames.filter((name) => name !== className));

  const get = () => classesNames.join(" ");

  return {
    add,
    remove,
    get,
  };
};

export default classes;
