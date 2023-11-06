import { useColorScheme } from '@mui/joy';
import AspectRatio, { AspectRatioProps } from '@mui/joy/AspectRatio';

export default function MuiLogo({ sx, ...props }: AspectRatioProps) {
  const { mode } = useColorScheme();

  return (
    <AspectRatio
      ratio="1"
      variant="plain"
      {...props}
      sx={[
        {
          width: 36,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <div>
        <svg width="400" height="350" viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_4_2)">
            <path d="M63 0V351H0V0H63Z" fill={mode === 'light' ? 'black' : 'white'} />
            <path
              d="M132 351V0H263.517C290.46 0 313.064 4.68457 331.33 14.0537C349.711 23.4228 363.582 36.5625 372.943 53.4726C382.419 70.2686 387.157 89.8638 387.157 112.258C387.157 134.767 382.362 154.305 372.772 170.873C363.296 187.326 349.311 200.065 330.817 209.092C312.322 218.004 289.603 222.46 262.661 222.46H168.989V169.673H254.098C269.853 169.673 282.754 167.502 292.8 163.16C302.846 158.704 310.267 152.249 315.062 143.793C319.971 135.224 322.426 124.712 322.426 112.258C322.426 99.8042 319.971 89.1782 315.062 80.3804C310.153 71.4683 302.675 64.727 292.629 60.1567C282.582 55.4722 269.625 53.1299 253.756 53.1299H195.532V351H132ZM313.178 191.953L400 351H329.104L243.824 191.953H313.178Z"
              fill="#D2042D"
            />
          </g>
          <defs>
            <clipPath id="clip0_4_2">
              <rect width="400" height="350" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </AspectRatio>
  );
}
