type TImageResultsItem = {
  original: string;
  position?: number;
  original_width?: number;
  original_height?: number;
  is_product?: boolean;
} & { [k: string]: string }


export interface IImageResponse {
  images_results: TImageResultsItem[]
}