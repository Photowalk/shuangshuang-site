import Image from "next/image";

type DeviceFrameProps = {
  src: string;
  alt: string;
  labelCn: string;
  labelEn: string;
  className?: string;
  priority?: boolean;
};

export function DeviceFrame({
  src,
  alt,
  labelCn,
  labelEn,
  className,
  priority = false,
}: DeviceFrameProps) {
  return (
    <figure className={`deviceFrame ${className ?? ""}`.trim()}>
      <div className="deviceTopBar">
        <span />
        <span />
        <span />
      </div>
      <div className="deviceScreen">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 72vw, 28vw"
          className="deviceImage"
        />
      </div>
      <figcaption className="deviceCaption">
        <span className="deviceLabelCn">{labelCn}</span>
        <span className="deviceLabelEn">{labelEn}</span>
      </figcaption>
    </figure>
  );
}
