import React from 'react';

// Alternative way to wrap this component (Resources) with requiring authentication.
import requireAuth from './require_authentication';

// Alternative way to wrap this component (Resources) with requiring authentication.
// You would do it this way if EVERY instance ever of Resources within your application ALWAYS needed this.
// Otherwise, the first way we did it, is to wrap it "upon use" over in the Router in index.js ...
const Resources = () => {
// export default () => {
  return (
    <div>statically speaking resources text</div>
  );
};

// Alternative way to wrap this component (Resources) with requiring authentication.
export default requireAuth(Resources);
