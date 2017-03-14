window.dojoConfig = {
  deps: ["app/main"],
  packages: [
    {
      name: "app",
      location: location.pathname.replace(/\/[^/]+$/, "/") + "src"
    }
  ]
};