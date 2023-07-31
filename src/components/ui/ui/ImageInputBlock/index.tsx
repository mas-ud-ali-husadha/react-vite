import React, { forwardRef, useRef } from "react";
import EmptyImage from "@/assets/component/noimage.png";
import { AiFillCloseCircle } from "react-icons/ai";
interface ImageInputBlockType
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value"> {
  onChange?: (arg: any) => void;
  accept?: string;
  value: Blob | MediaSource | string | any;
}

const ImageInputBlock = forwardRef<HTMLImageElement, ImageInputBlockType>(
  (
    { accept = "image/png,image/jpg,image/jpeg", onChange, value, ...props },
    ref
  ) => {
    const imageRef = useRef<HTMLInputElement | null>(null);

    return (
      <>
        <input
          {...props}
          type="file"
          hidden
          ref={imageRef}
          value=""
          accept={accept}
          onChange={(e) => {
            if (e.target.files) {
              onChange && onChange(e.target.files[0]);
            }
          }}
        />

        <div className="relative">
          <img
            ref={ref}
            src={
              value
                ? typeof value === "object"
                  ? URL.createObjectURL(value as Blob)
                  : value
                : EmptyImage
            }
            className="object-contain border cursor-pointer h-56"
            onClick={() => imageRef.current && imageRef.current.click()}
          />
          {value && (
            <AiFillCloseCircle
              className="absolute right-2 top-2 text-black cursor-pointer"
              onClick={() => onChange && onChange(null)}
              size="1.4em"
            />
          )}
        </div>
      </>
    );
  }
);

export default ImageInputBlock;
