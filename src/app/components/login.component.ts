/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-login',
  templateUrl: './login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class loginComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_CDq5BdtyJb7BGWVH(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_CDq5BdtyJb7BGWVH(bh) {
    try {
      bh = this.sd_yq9w9xH97S4FJFI6(bh);
      //appendnew_next_sd_CDq5BdtyJb7BGWVH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CDq5BdtyJb7BGWVH');
    }
  }

  login(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_IJIg3LXEZQrZecqY(bh);
      //appendnew_next_login
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KMUj9jojl1WbxANg');
    }
  }

  //appendnew_flow_loginComponent_start

  sd_yq9w9xH97S4FJFI6(bh) {
    try {
      this.page.window = undefined;
      //appendnew_next_sd_yq9w9xH97S4FJFI6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yq9w9xH97S4FJFI6');
    }
  }

  sd_IJIg3LXEZQrZecqY(bh) {
    try {
      const page = this.page;
      window.location.href = '/home';
      console.log(window);
      //appendnew_next_sd_IJIg3LXEZQrZecqY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IJIg3LXEZQrZecqY');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_loginComponent_Catch
}
