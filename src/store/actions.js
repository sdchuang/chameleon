
import { request } from '../utils/requests'

export default {

  ajax(_, options){
    return request(options.method, options);
  }
    
}
