module.exports = {
    connect: (mapStateToProps:any, mapDispatchToProps:any) => (ReactComponent:any) => ({
      mapStateToProps,
      mapDispatchToProps,
      ReactComponent,
    }),
    Provider: ({children}:any) => children
  };
  
