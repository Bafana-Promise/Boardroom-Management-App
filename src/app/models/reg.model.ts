import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class reg {
  @JsonProperty('firstName', String, true)
  public firstName: string = undefined;

  @JsonProperty('lastName', String, true)
  public lastName: string = undefined;

  @JsonProperty('email', String, true)
  public email: string = undefined;

  @JsonProperty('pass', String, true)
  public pass: string = undefined;

  @JsonProperty('conPass', String, true)
  public conPass: string = undefined;

}