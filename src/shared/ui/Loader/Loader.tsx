import cls from './Loader.module.css'

const Loader = () => {
    return (
        <div className={cls.loaderContainer}>
            <svg className={cls.loader} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
                <circle className={cls.circle} fill='none' stroke='none' strokeWidth='2' r='15' cx='40' cy='100'>
                    <animate attributeName='opacity' calcMode='spline' dur='2' values='1;0;1;'
                             keySplines='.5 0 .5 1;.5 0 .5 1' repeatCount='indefinite' begin='-.4'>
                    </animate>
                </circle>
                <circle className={cls.circle} fill='none' stroke='none' strokeWidth='2' r='15' cx='100' cy='100'>
                    <animate attributeName='opacity' calcMode='spline' dur='2' values='1;0;1;'
                             keySplines='.5 0 .5 1;.5 0 .5 1'
                             repeatCount='indefinite' begin='-.2'></animate>
                </circle>
                <circle className={cls.circle} fill='none' stroke='none' strokeWidth='2' r='15' cx='160' cy='100'>
                    <animate attributeName='opacity' calcMode='spline' dur='2' values='1;0;1;'
                             keySplines='.5 0 .5 1;.5 0 .5 1' repeatCount='indefinite' begin='0'></animate>
                </circle>
            </svg>
        </div>

    );
};

export default Loader;