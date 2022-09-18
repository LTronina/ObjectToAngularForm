import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'con-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  public sampleForm: any = { name: 'Johny', surname: 'Bravo', sex: 'male' };
  public config: { [name: string]: configType } = {};
  public error: string = '';
  public configTypeEnum = configType;

  constructor() {}

  ngOnInit(): void {
    this.refreshConfig();
  }

  buildForm(){

  }


  objectChange(input: any) {
    if (!this.checkIsObject(input)) {
      const msg = 'Not a object.';
      this.error = msg;
      console.log(msg);
      return;
    }
    this.sampleForm = JSON.parse(input);
    this.refreshConfig();
  }

  private refreshConfig() {
    this.error = '';
    this.config = {};

    if (this.sampleForm == null) {
      this.error = 'no data';
      return;
    }

    for (const iterator in this.sampleForm) {
      this.config[iterator] = configType.property;
    }
  }


  private checkIsObject(input: any) {
    try {
      JSON.parse(input);
    } catch (error) {
      return false;
    }
    return true;
  }
}
enum configType {
  property = 'property',
  option = 'option',
}
