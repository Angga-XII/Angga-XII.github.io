const environmentType = () => {
  if (process.env.NODE_ENV != "development") {
    return "prod";
  } else {
    return "dev";
  }
};

export default environmentType;
