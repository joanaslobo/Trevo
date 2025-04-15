interface WaveDividerProps {
  fillColor?: string;
  position?: 'top' | 'bottom';
  height?: number;
}

const WaveDivider = ({ 
  fillColor = '#FFFFFF', 
  position = 'bottom',
  height = 50
}: WaveDividerProps) => {
  const positionStyles = position === 'top' ? 'top-0 rotate-180' : 'bottom-0';
  
  return (
    <div className={`absolute left-0 w-full overflow-hidden line-height-0 ${positionStyles}`}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        className={`w-full`}
        style={{ height: `${height}px` }}
      >
        <path 
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
