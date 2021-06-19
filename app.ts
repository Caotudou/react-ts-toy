// import _ from 'lodash';
function component() {
    const element = document.createElement('div');

    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = ['Hello', 'webpack','angular'].join(' ');

    return element;
  }
  console.log('I get called from app.ts!');
  document.body.appendChild(component());
