import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class user {
  @JsonProperty('position', Number, true)
  public position: number = undefined;

  @JsonProperty('name', String, true)
  public name: string = undefined;

  @JsonProperty('weight', Number, true)
  public weight: number = undefined;

  @JsonProperty('symbol', String, true)
  public symbol: string = undefined;

}