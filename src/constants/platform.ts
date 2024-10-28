// types/platform.ts
export type ImageSize = {
  width: number;
  height: number;
  aspectRatio?: string;
  minWidth?: number;
  minHeight?: number;
  maxFileSize?: string;
};

export type ImageType = {
  name: string;
  description: string;
  size: ImageSize;
  recommendations?: string[];
};

export type Platform = {
  id: string;
  name: string;
  icon: string;
  description: string;
  imageTypes: ImageType[];
};

// Data structure
export const PLATFORMS: Platform[] = [
  {
    id: "instagram",
    name: "Instagram",
    icon: "instagram",
    description: "Instagram supports both horizontal and vertical images, offering variety in posting options.",
    imageTypes: [
      {
        name: "Profile Picture",
        description: "Personal profile image displayed as a circle",
        size: {
          width: 320,
          height: 320
        },
        recommendations: [
          "Ensure important elements are centered",
          "Will be displayed as 110x110 but stored at 320x320"
        ]
      },
      {
        name: "Horizontal Post",
        description: "Landscape oriented post image",
        size: {
          width: 1080,
          height: 566,
          aspectRatio: "1.91:1"
        }
      },
      {
        name: "Vertical Post",
        description: "Portrait oriented post image",
        size: {
          width: 1080,
          height: 1350,
          aspectRatio: "4:5"
        }
      },
      // Add other Instagram image types...
    ]
  },
  // Add other platforms...
];