  
  const toggleDarkMode = () => {
    const theme = document.body.getAttribute("data-theme");
    if (theme == "dark") {
      document.body.setAttribute("data-theme", "light");
    } else {
      document.body.setAttribute("data-theme", "dark");
    }
  };

  export default toggleDarkMode