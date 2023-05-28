<h1 align="center">
  FEMESTY
<br>
<br>
FEMESTY REACT NATIVE
</h1>


JSON-server Docs: https://www.npmjs.com/package/json-server
to test  ==> in femesty-app/DB dir run "node index.js"  and listen to port 4000 (change - EXPO_BASE_URL=http://localhost:4000 in docker-compose.yml)

<p align="center">The Project Structure</p>
<ul>
  <li>
    assets
    <ul>
      <li>
        images
      </li>
      <li>
        icons
      </li>
      <li>
        images
      </li>
    </ul>  
  </li>
  <li>
    config
    <ul>
      <li>
        routers
      </li>
      <li>
        logger
      </li>
      <li>
        etc...
      </li>
    </ul>  
  </li>
  <li>
    styles
    <ul>
      <li>
        colors
      </li>
      <li>
        layouts
      </li>
      <li>
        etc...
      </li>
    </ul>  
  </li>
  <li>
    translations
    <ul>
      <li>
        en
      </li>
      <li>
        etc...
      </li>
    </ul>  
  </li>
  <li>
    screens       // combination of native components, shared / theme components or custom child components
  </li>
    components
    <ul>
      <li>
        theme    //wrapping native components to force style
      </li>
      <li>
        shared   //custom component that’s used in more than one screen
      </li>
    </ul>
  <li>
    services    //logic that depends on the application logic
  </li>
  <li>
    utility     //services that does not depend on application logic (ex: logger)
  </li>
  <li>
    entities    //classes to hold types and fields of the app logic
  </li>
  <li>
    store
  </li>
  <li>
    .env        //config based on environment (i.e: api url)
  </li>
</ul>

