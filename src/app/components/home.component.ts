/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  ViewChild,
  ViewChildren,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_46WmH3j0JqxZjxoq(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_46WmH3j0JqxZjxoq(bh) {
    try {
      bh = this.sd_QLL89PJFFkfl06Kr(bh);
      //appendnew_next_sd_46WmH3j0JqxZjxoq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_46WmH3j0JqxZjxoq');
    }
  }

  logout(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_gzr5GmvZpFLPdFdx(bh);
      //appendnew_next_logout
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QlrjcHlhgNAuPFtz');
    }
  }

  menuOpen(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_L97xzNGPHWu87dvJ(bh);
      //appendnew_next_menuOpen
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_W68nhsn0lsk23CO6');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_QLL89PJFFkfl06Kr(bh) {
    try {
      this.page.sidenavItems = undefined;
      this.page.sideNavOpen = true;
      this.page.menuBarOpen = false;
      this.page.iconName = 'expand_more';
      bh = this.sd_QhGoHZOb0IOg3UpN(bh);
      //appendnew_next_sd_QLL89PJFFkfl06Kr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QLL89PJFFkfl06Kr');
    }
  }

  sd_QhGoHZOb0IOg3UpN(bh) {
    try {
      const page = this.page;
      page.sidenavItems = [
        { url: '/home/dashboard', icon: 'dashboard', name: 'Dashboard' },
        { url: '/home/#', icon: 'perm_contact_calendar', name: 'Contact' },
        {
          url: '/home/#',
          icon: 'power_settings_new',
          name: 'Logout',
          func: 'logout()',
        },
      ];
      //appendnew_next_sd_QhGoHZOb0IOg3UpN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QhGoHZOb0IOg3UpN');
    }
  }

  sd_gzr5GmvZpFLPdFdx(bh) {
    try {
      const page = this.page;
      sessionStorage.clear();
      //return redirect('/login');
      window.location.href = '/login';
      //console.log(window.location)
      //window.sessionStorage.clear()
      //appendnew_next_sd_gzr5GmvZpFLPdFdx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gzr5GmvZpFLPdFdx');
    }
  }

  sd_L97xzNGPHWu87dvJ(bh) {
    try {
      const page = this.page;
      if (page.menuBarOpen) {
        page.iconName = 'expand_more';
        page.menuBarOpen = false;
      } else {
        page.iconName = 'expand_less';
        page.menuBarOpen = true;
      }
      //appendnew_next_sd_L97xzNGPHWu87dvJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L97xzNGPHWu87dvJ');
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
  //appendnew_flow_homeComponent_Catch
}
