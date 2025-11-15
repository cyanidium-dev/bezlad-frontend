interface BluredElipseProps {
    className?: string;
}

export const BluredElipse = ({ className }: BluredElipseProps) => {
    return (
        <svg
            width="426"
            height="389"
            viewBox="0 0 426 389"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g filter="url(#filter0_f_390_18587)">
                <ellipse
                    cx="212.825"
                    cy="194.172"
                    rx="131.5"
                    ry="112.848"
                    fill="currentColor"
                />
            </g>
            <defs>
                <filter
                    id="filter0_f_390_18587"
                    x="-0.000114441"
                    y="7.62939e-06"
                    width="425.65"
                    height="388.345"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="40.6624"
                        result="effect1_foregroundBlur_390_18587"
                    />
                </filter>
            </defs>
        </svg>
    );
};
