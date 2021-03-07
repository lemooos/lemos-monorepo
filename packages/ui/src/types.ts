export interface ThemeContext {
  primary?: {
    color: string; // primary::color #06f
    // other good positions for primary::color:
    // #9046cf -- #cc59d2 -- #f487b6 -- #d81e5b
    contrast: string; // primary::contrast #fff
  };

  secondary?: {
    color: string; // secondary::color #fff3f0
    contrast: string; // secondary::contrast #000
  };

  terciary?: {
    color: string; // terciary::color ##d81e5b
    contrast: string; // terciary::contrast #fff
  };

  problem?: {
    color: string; // problem::color #f0544f
    contrast: string; // problem::contrast #fff
  };

  warning?: {
    color: string; // warning::color #ea9010 or #fde12d
    contrast: string; // warning::contrast #fff
  };

  success?: {
    color: string; // success::color #1dbb1d or #25e445
    contrast: string; // warning:contrast #fff
  };

  settings?: {
    fontRootElementMeasureSize?: string;
    // settings::fontRootElementMeasureSize 16px
    fontFamily?: string; // settings::fontFamily Inter -- Roboto
  };
}
