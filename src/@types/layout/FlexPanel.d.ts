export interface IFlexPanel {
  backgroundColor?: Properties['backgroundColor']
  width?: Properties['width'],
  height?: Properties['height'],
  padding?: Properties['padding'],
};

export type IStyledFlexPanel = WithDollarPrefix<IFlexPanel>;