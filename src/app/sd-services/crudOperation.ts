/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class crudOperation {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_crudOperation

  async register(form: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          form: form,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_dhO3dn4RnehyYKVS(bh);
      //appendnew_next_register
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lPrYZAfS1PchmD1b');
    }
  }

  async getRegUsers(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_Vz7zdWPdlJgRu3n4(bh);
      //appendnew_next_getRegUsers
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uhO3DaNW3vL9FDMI');
    }
  }

  async loginUser(user: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          user: user,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_MeErj3IpvmyPjwdZ(bh);
      //appendnew_next_loginUser
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fUME6yReHhnSiKlo');
    }
  }

  async deleteUser(...others) {
    try {
      var bh: any = {
        input: {},
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_Q1pPOjVT7Xs6emDY(bh);
      //appendnew_next_deleteUser
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iROl80nDTtR2K3aD');
    }
  }

  async addBookings(form: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          form: form,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_6nV2u7vQGFmywB9b(bh);
      //appendnew_next_addBookings
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HLSs436Doas18qX8');
    }
  }

  async sd_jIElZVvLMZulmjIq(email: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          email: email,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_w5Of1UwNGMbUxiLg(bh);
      //appendnew_next_sd_jIElZVvLMZulmjIq
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jIElZVvLMZulmjIq');
    }
  }

  async registerUser(form: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          form: form,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_VbW9AG2z4mJOAE8e(bh);
      //appendnew_next_registerUser
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5cfgXVWkZ1VC0spp');
    }
  }

  async getUserBookings(emailObj: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          emailObj: emailObj,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_begk8VXiOJKZzvAu(bh);
      //appendnew_next_getUserBookings
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_G6AkAfdKkPGAho1C');
    }
  }

  async getBookings(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_tGWGSnlhtwDr8b5U(bh);
      //appendnew_next_getBookings
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1yViF98LHBgkdF3t');
    }
  }

  //appendnew_flow_crudOperation_start

  async sd_dhO3dn4RnehyYKVS(bh) {
    try {
      bh.local.result = {};

      bh = await this.sd_CHb129ApVK4sLpGs(bh);
      //appendnew_next_sd_dhO3dn4RnehyYKVS
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dhO3dn4RnehyYKVS');
    }
  }

  async sd_CHb129ApVK4sLpGs(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `getUser/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.form,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_CHb129ApVK4sLpGs
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CHb129ApVK4sLpGs');
    }
  }

  async sd_Vz7zdWPdlJgRu3n4(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `getRegUsers/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_QfEoabL97TJv2zhu(bh);
      //appendnew_next_sd_Vz7zdWPdlJgRu3n4
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Vz7zdWPdlJgRu3n4');
    }
  }

  async sd_QfEoabL97TJv2zhu(bh) {
    try {
      //appendnew_next_sd_QfEoabL97TJv2zhu
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QfEoabL97TJv2zhu');
    }
  }

  async sd_MeErj3IpvmyPjwdZ(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `loginUser/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.user,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_hgmYDuvfZaykBwin(bh);
      //appendnew_next_sd_MeErj3IpvmyPjwdZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MeErj3IpvmyPjwdZ');
    }
  }

  async sd_hgmYDuvfZaykBwin(bh) {
    try {
      //if(!bh.local.result.length){
      //  console.log("User does not exist");
      //}
      //appendnew_next_sd_hgmYDuvfZaykBwin
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hgmYDuvfZaykBwin');
    }
  }

  async sd_Q1pPOjVT7Xs6emDY(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `deleteUser/${bh.input.id}/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'delete',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_Q1pPOjVT7Xs6emDY
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Q1pPOjVT7Xs6emDY');
    }
  }

  async sd_6nV2u7vQGFmywB9b(bh) {
    try {
      bh.local.result = {};

      // console.log(bh.input)
      bh = await this.sd_cdf3D478kO2rWVlj(bh);
      //appendnew_next_sd_6nV2u7vQGFmywB9b
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6nV2u7vQGFmywB9b');
    }
  }

  async sd_cdf3D478kO2rWVlj(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `addBookings/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.form,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_cdf3D478kO2rWVlj
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cdf3D478kO2rWVlj');
    }
  }

  async sd_w5Of1UwNGMbUxiLg(bh) {
    try {
      bh = await this.sd_c18XJIC0XnM8bX73(bh);
      //appendnew_next_sd_w5Of1UwNGMbUxiLg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_w5Of1UwNGMbUxiLg');
    }
  }

  async sd_c18XJIC0XnM8bX73(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `getUser/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_c18XJIC0XnM8bX73
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_c18XJIC0XnM8bX73');
    }
  }

  async sd_VbW9AG2z4mJOAE8e(bh) {
    try {
      bh.local.result = {};

      bh = await this.sd_91o2gsdxPufiQfWg(bh);
      //appendnew_next_sd_VbW9AG2z4mJOAE8e
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VbW9AG2z4mJOAE8e');
    }
  }

  async sd_91o2gsdxPufiQfWg(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `regUsers/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.form,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_91o2gsdxPufiQfWg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_91o2gsdxPufiQfWg');
    }
  }

  async sd_begk8VXiOJKZzvAu(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `getUserBookings/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.emailObj,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_Pd4uW5S3VpItPxm8(bh);
      //appendnew_next_sd_begk8VXiOJKZzvAu
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_begk8VXiOJKZzvAu');
    }
  }

  async sd_Pd4uW5S3VpItPxm8(bh) {
    try {
      // console.log(bh.local.result, "Data From CSD")
      //appendnew_next_sd_Pd4uW5S3VpItPxm8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Pd4uW5S3VpItPxm8');
    }
  }

  async sd_tGWGSnlhtwDr8b5U(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `getaUserBooking/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_PJtDNWd8sHJO6cVZ(bh);
      //appendnew_next_sd_tGWGSnlhtwDr8b5U
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tGWGSnlhtwDr8b5U');
    }
  }

  async sd_PJtDNWd8sHJO6cVZ(bh) {
    try {
      //appendnew_next_sd_PJtDNWd8sHJO6cVZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PJtDNWd8sHJO6cVZ');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
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
  //appendnew_flow_crudOperation_Catch
}
