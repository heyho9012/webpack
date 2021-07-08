// index.js
import _ from 'lodash';
// ES6

function component() {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');
  return element;
}

document.body.appendChild(component());



  /* lodash Array => _.join(array, [separator=','])
    *
    * _.join(['a', 'b', 'c'], '~');
    * => 'a~b~c'
  */

  /* ES6 modules => export, import 
    * export 변수, 함수
    * import { 불러올 변수 또는 함수 이름} from '파일 경로'
  */

  /* babel is javascript compiler
    * transform syntax
    * source code transformations (codemods)
    * polyfill features that are missing in your target environment
  */