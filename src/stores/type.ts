export interface option {
  name: string;
  icon: any;
  click: Function;
}
/**
 *
 *
 * @export
 * @interface file
 */
export interface file {
  name: string;
  isFolder: boolean;
  updateTime?: string;
  id: string;
  fileType?: string;
  size?: number;
  icon: any;
  isVisible: boolean;
  centerDialogVisible: boolean;
  options: option[];
}
