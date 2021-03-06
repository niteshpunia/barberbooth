const proxy = require("http-proxy-middleware");
// proxy file should be created after both front nd backend server are running

const herokuUrl = "https://infinite-basin-75173.herokuapp.com";
// const herokuUrl = "https://localhost:5555";
// const baseUrl = "https://localhost:5555";
module.exports = function (app) {
  app.use(
    proxy(["/api", "/api/prowork"], {
      target: `${herokuUrl}`,
    })
  );
  app.use(
    proxy(["/api", "/api/category"], {
      target: `${herokuUrl}`,
    })
  );
  app.use(
    proxy(["/api", "/api/login"], {
      target: `${herokuUrl}`,
    })
  );
  app.use(
    proxy(["/api", "/api/user"], {
      target: `${herokuUrl}`,
    })
  );
  app.use(
    proxy(["/api", "/api/register"], {
      target: `${herokuUrl}`,
    })
  );
  app.use(
    proxy(["/api", "/api/logout"], {
      target: `${herokuUrl}`,
    })
  );
  app.use(
    proxy(["/api", "/auth/google"], {
      target: `${herokuUrl}`,
    })
  );
  app.use(
    proxy(["/api", "/auth/facebook"], {
      target: `${herokuUrl}`,
    })
  );
  app.use(
    proxy(["/api", "/api/cat"], {
      target: `${herokuUrl}`,
    })
  );
  app.use(
    proxy(["/api", "api/workerlist"], {
      target: `${herokuUrl}`,
    })
  );
  app.use(proxy(["/api", "api/oneworker"], { target: `${herokuUrl}` }));
};

// app.use(proxy(["/api", "/api/prowork"], { target: "http://localhost:5555" }));
// app.use(proxy(["/api", "/api/category"], { target: "http://localhost:5555" }));
// app.use(proxy(["/api", "/api/login"], { target: "http://localhost:5555" }));
// app.use(proxy(["/api", "/api/user"], { target: "http://localhost:5555" }));
// app.use(proxy(["/api", "/api/register"], { target: "http://localhost:5555" }));
// app.use(proxy(["/api", "/api/logout"], { target: "http://localhost:5555" }));
// app.use(proxy(["/api", "/auth/google"], { target: "http://localhost:5555" }));
// app.use(proxy(["/api", "/auth/facebook"], { target: "http://localhost:5555" }));
// app.use(proxy(["/api", "/api/cat"], { target: "http://localhost:5555" }));
// app.use(proxy(["/api", "api/workerlist"], { target: "http://localhost:5555" }));
