import React from 'react';
import {Segment, Dimmer, Loader } from 'semantic-ui-react';
 function CustomLoader() {
  return (
    <div>
      <Dimmer active inverted>
        <Loader inverted content="Loading" />
      </Dimmer>
    </div>
  );
}

export default CustomLoader;