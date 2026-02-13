import Contacts from './contacts';

const OriginFooter = () => {
    return (
        <footer className="text-gray-200 bg-neutral-900">
            <div className="max-w-7xl xl:max-w-7xl mx-auto px-8 py-10">
                <div className="flex flex-col justify-between items-center md:flex-row">
                    
                    {/* 왼쪽 영역: 저작권, 제작자, 업데이트 관리자 */}
                    <p className="text-sm text-center md:text-left text-gray-300 font-normal mb-3 md:mb-0 leading-relaxed">
                        Copyright ⓒ 2025 Ludens. All rights reserved.
                        <br />
                        Created by <span className="text-white font-semibold"><a href="https://grden.github.io" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity duration-200">김정원</a>, <a href="https://github.com/CuriHuS/" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity duration-200">최현승</a>, 한채연</span>
                        <br />
                        Updated by <span className="text-white font-semibold"><a href="https://github.com/dpqksr5501" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity duration-200">조연우</a></span>
                    </p>

                    {/* 오른쪽 영역: 소통하기 및 회장 정보 */}
                    <div className="flex flex-col items-center md:items-end">
                        <div className="flex flex-col md:flex-row gap-2 items-center">
                            <span className="text-lg font-bold">Ludens와 소통하기</span>
                            <Contacts />
                        </div>
                        <span className="text-sm text-white font-semibold mt-2">
                            회장 <a href="https://github.com/sinhyeok04" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity duration-200">권신혁</a>
                        </span>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default OriginFooter;