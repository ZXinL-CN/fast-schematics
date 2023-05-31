export interface Schema {
  name: string;
  project: string;
  path?: string;
  displayBlock?: boolean;
  inlineStyle?: boolean;
  inlineTemplate?: boolean;
  standalone?: boolean;
  viewEncapsulation?: string;
  changeDetection?: string;
  prefix?: string;
  style?: string;
  type?: string;
  skipTests?: boolean;
  flat?: boolean;
  skipImport?: boolean;
  selector?: string;
  skipSelector?: boolean;
  module?: string;
  export?: boolean;
}

export enum Style {
    Css = 'css',
    Scss = 'scss',
    Sass = 'sass',
    Less = 'less',
    None = 'none',
}
