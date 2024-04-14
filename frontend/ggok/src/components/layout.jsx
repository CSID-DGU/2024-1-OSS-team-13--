
import { Link, Outlet, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  align-items: center;
`;

const Top = styled.div`
    
    height: 50px;
    align-items: center;
    justify-content: center;

`;

const Out = styled.div`
    width: 100%;
    align-items: center;
    justify-content: center;

`;


const Menu = styled.div`
  height: 110px;
  display: flex;
  flex-direction: rows;
  align-items: center;
  gap: 20px;
  
`;

const MenuItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  height: 50px;
  width: 35px;
  margin: 13px;
  svg {
    width: 45px;
    height: 55px;
    fill: white;
  }
`;

export default function Layout(){
    const navigate = useNavigate();
    const onLogOut = async () => {
      const ok = confirm("Are you sure you want to log out?");
      if (ok) {
        await auth.signOut();
        navigate("/login");
      }
    };

    return(
        <Wrapper>
            <Top></Top>
            <Out><Outlet></Outlet></Out>
            <Menu>
            <Link to="/community">
                <MenuItem>
                    <svg width="38" height="51" viewBox="0 0 38 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.7658 18.5C17.7658 18.96 17.9486 19.4011 18.2738 19.7264C18.5991 20.0516 19.0402 20.2344 19.5002 20.2344C19.9602 20.2344 20.4013 20.0516 20.7266 19.7264C21.0519 19.4011 21.2346 18.96 21.2346 18.5C21.2346 18.04 21.0519 17.5989 20.7266 17.2736C20.4013 16.9484 19.9602 16.7656 19.5002 16.7656C19.0402 16.7656 18.5991 16.9484 18.2738 17.2736C17.9486 17.5989 17.7658 18.04 17.7658 18.5ZM24.9924 18.5C24.9924 18.96 25.1751 19.4011 25.5004 19.7264C25.8256 20.0516 26.2668 20.2344 26.7268 20.2344C27.1868 20.2344 27.6279 20.0516 27.9532 19.7264C28.2784 19.4011 28.4611 18.96 28.4611 18.5C28.4611 18.04 28.2784 17.5989 27.9532 17.2736C27.6279 16.9484 27.1868 16.7656 26.7268 16.7656C26.2668 16.7656 25.8256 16.9484 25.5004 17.2736C25.1751 17.5989 24.9924 18.04 24.9924 18.5ZM10.5393 18.5C10.5393 18.96 10.722 19.4011 11.0473 19.7264C11.3725 20.0516 11.8137 20.2344 12.2736 20.2344C12.7336 20.2344 13.1748 20.0516 13.5 19.7264C13.8253 19.4011 14.008 18.96 14.008 18.5C14.008 18.04 13.8253 17.5989 13.5 17.2736C13.1748 16.9484 12.7336 16.7656 12.2736 16.7656C11.8137 16.7656 11.3725 16.9484 11.0473 17.2736C10.722 17.5989 10.5393 18.04 10.5393 18.5ZM34.4303 12.2273C33.6137 10.287 32.443 8.54541 30.9507 7.04951C29.4688 5.56227 27.7097 4.3801 25.7729 3.56992C23.7856 2.73525 21.6754 2.3125 19.5002 2.3125H19.4279C17.2383 2.32334 15.1173 2.75693 13.1228 3.60967C11.2025 4.42815 9.45985 5.61243 7.9919 7.09648C6.51407 8.58877 5.35421 10.3231 4.55206 12.2563C3.72101 14.258 3.30187 16.3862 3.3127 18.5759C3.32497 21.0852 3.91862 23.5575 5.04708 25.7988V31.291C5.04708 31.7318 5.22219 32.1546 5.5339 32.4663C5.84561 32.778 6.26837 32.9531 6.70919 32.9531H12.205C14.4463 34.0816 16.9186 34.6752 19.4279 34.6875H19.5038C21.6682 34.6875 23.7675 34.2684 25.744 33.4481C27.671 32.6476 29.4236 31.4792 30.9037 30.0083C32.396 28.5305 33.5703 26.8033 34.3905 24.8774C35.2433 22.8829 35.6769 20.7619 35.6877 18.5723C35.6985 16.3718 35.2722 14.2363 34.4303 12.2273ZM28.9706 28.0535C26.4377 30.5611 23.0774 31.9414 19.5002 31.9414H19.4388C17.26 31.9306 15.0956 31.3886 13.1842 30.3696L12.8807 30.207H7.79317V25.1195L7.63058 24.816C6.61163 22.9046 6.06964 20.7402 6.0588 18.5614C6.04435 14.959 7.42101 11.577 9.94669 9.02959C12.4688 6.48223 15.84 5.07305 19.4424 5.05859H19.5038C21.3105 5.05859 23.0629 5.40908 24.7142 6.10283C26.3257 6.77852 27.771 7.75049 29.014 8.99346C30.2533 10.2328 31.2289 11.6817 31.9046 13.2933C32.6056 14.9626 32.9561 16.7331 32.9488 18.5614C32.9272 22.1603 31.5144 25.5314 28.9706 28.0535Z" fill="#D9D9D9"/>
                    <path d="M4.60156 41.68H5.40156C5.40156 44.29 4.50156 46.69 1.32156 48.29L0.851563 47.65C3.64156 46.25 4.60156 44.24 4.60156 41.77V41.68ZM1.34156 41.68H5.10156V42.35H1.34156V41.68ZM4.55156 43.92V44.55L1.02156 44.88L0.881563 44.16L4.55156 43.92ZM7.45156 40.74H8.28156V49.78H7.45156V40.74ZM5.38156 44.36H7.85156V45.05H5.38156V44.36ZM11.6208 46.19H12.4508V49.85H11.6208V46.19ZM14.8308 46.19H15.6608V49.85H14.8308V46.19ZM9.54078 45.97H17.7408V46.65H9.54078V45.97ZM10.5808 41.23H16.6808V44.75H10.5808V41.23ZM15.8708 41.89H11.4008V44.09H15.8708V41.89ZM24.82 40.74H25.65V49.78H24.82V40.74ZM18.82 41.62H19.64V47.22H18.82V41.62ZM18.82 46.73H19.56C20.93 46.73 22.36 46.63 23.89 46.31L23.99 47.02C22.42 47.34 20.99 47.45 19.56 47.45H18.82V46.73ZM27.5192 46.92H28.2392C29.9292 46.92 31.1092 46.87 32.4992 46.64L32.5792 47.31C31.1592 47.56 29.9592 47.61 28.2392 47.61H27.5192V46.92ZM27.5192 41.56H31.8992V42.25H28.3392V47.16H27.5192V41.56ZM28.1392 44.09H31.5692V44.76H28.1392V44.09ZM33.5292 40.74H34.3592V49.78H33.5292V40.74Z" fill="#D9D9D9"/>
                    </svg>
                </MenuItem>
            </Link>
            <Link to="/">
                <MenuItem>
                    <svg width="43" height="53" viewBox="0 0 43 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.5 31.6042L15.375 29.0417M15.375 29.0417L5.125 34.1667V11.9584L15.375 6.83337M15.375 29.0417V6.83337M15.375 6.83337L25.625 11.9584M25.625 11.9584L35.875 6.83337V19.6459M25.625 11.9584V21.3542M32.4583 30.75V30.7671M36.0817 34.3734C36.7986 33.6567 37.2869 32.7435 37.4847 31.7494C37.6826 30.7552 37.5812 29.7246 37.1934 28.7881C36.8055 27.8515 36.1486 27.051 35.3058 26.4878C34.463 25.9246 33.472 25.6239 32.4583 25.6239C31.4446 25.6239 30.4537 25.9246 29.6109 26.4878C28.768 27.051 28.1112 27.8515 27.7233 28.7881C27.3354 29.7246 27.234 30.7552 27.4319 31.7494C27.6298 32.7435 28.1181 33.6567 28.835 34.3734C29.549 35.0892 30.7568 36.1586 32.4583 37.5834C34.2538 36.063 35.4633 34.9935 36.0817 34.3734Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.04852 43.78H5.49852V49.36H2.04852V43.78ZM4.71852 44.44H2.82852V48.7H4.71852V44.44ZM8.60852 42.74H9.40852V51.78H8.60852V42.74ZM5.07852 46.14H7.15852V46.83H5.07852V46.14ZM6.81852 42.93H7.60852V51.33H6.81852V42.93ZM16.9977 42.75H17.8377V49.35H16.9977V42.75ZM12.0277 50.9H18.1077V51.58H12.0277V50.9ZM12.0277 48.67H12.8477V51.13H12.0277V48.67ZM12.9877 43.37C14.3377 43.37 15.3377 44.29 15.3377 45.6C15.3377 46.9 14.3377 47.83 12.9877 47.83C11.6377 47.83 10.6277 46.9 10.6277 45.6C10.6277 44.29 11.6377 43.37 12.9877 43.37ZM12.9877 44.09C12.1077 44.09 11.4377 44.71 11.4377 45.6C11.4377 46.48 12.1077 47.1 12.9877 47.1C13.8677 47.1 14.5377 46.48 14.5377 45.6C14.5377 44.71 13.8677 44.09 12.9877 44.09ZM19.6923 47.9318C19.6923 47.0369 19.8083 46.2143 20.0403 45.4638C20.2747 44.7109 20.6085 44.0185 21.0417 43.3864H21.7804C21.6099 43.6207 21.4501 43.9096 21.301 44.2528C21.1542 44.5937 21.0252 44.969 20.9139 45.3786C20.8026 45.7857 20.715 46.2071 20.6511 46.6428C20.5895 47.0784 20.5588 47.508 20.5588 47.9318C20.5588 48.4953 20.6132 49.067 20.7221 49.647C20.831 50.227 20.9778 50.7656 21.1625 51.2628C21.3471 51.7599 21.5531 52.1648 21.7804 52.4773H21.0417C20.6085 51.8452 20.2747 51.1539 20.0403 50.4034C19.8083 49.6506 19.6923 48.8267 19.6923 47.9318ZM24.64 44.03H25.31V45.5C25.31 47.41 24.16 49.33 22.72 50.04L22.24 49.38C23.55 48.76 24.64 47.06 24.64 45.5V44.03ZM24.8 44.03H25.47V45.5C25.47 47.03 26.56 48.59 27.89 49.16L27.42 49.82C25.96 49.14 24.8 47.38 24.8 45.5V44.03ZM22.54 43.66H27.59V44.36H22.54V43.66ZM28.81 42.74H29.64V51.78H28.81V42.74ZM31.9792 46.96H38.1892V47.64H31.9792V46.96ZM30.9492 49.95H39.1392V50.65H30.9492V49.95ZM34.6092 47.25H35.4392V50.23H34.6092V47.25ZM31.9792 43.46H38.0992V44.14H32.8092V47.26H31.9792V43.46ZM41.7053 47.9318C41.7053 48.8267 41.5881 49.6506 41.3537 50.4034C41.1217 51.1539 40.7891 51.8452 40.3558 52.4773H39.6172C39.7876 52.2429 39.9463 51.9541 40.093 51.6108C40.2422 51.2699 40.3724 50.8958 40.4837 50.4886C40.5949 50.0791 40.6813 49.6565 40.7429 49.2209C40.8068 48.7829 40.8388 48.3532 40.8388 47.9318C40.8388 47.3684 40.7843 46.7966 40.6754 46.2166C40.5665 45.6366 40.4197 45.098 40.2351 44.6009C40.0504 44.1037 39.8445 43.6989 39.6172 43.3864H40.3558C40.7891 44.0185 41.1217 44.7109 41.3537 45.4638C41.5881 46.2143 41.7053 47.0369 41.7053 47.9318Z" fill="black"/>
                    </svg>
                </MenuItem>
            </Link>
            <Link to="/roadmap">
                <MenuItem>
                    <svg width="34" height="48" viewBox="0 0 34 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.70117 44.98H10.8912V45.67H2.70117V44.98ZM6.36117 43.04H7.19117V45.27H6.36117V43.04ZM3.69117 38.41H9.88117V41.15H4.54117V42.96H3.72117V40.48H9.06117V39.08H3.69117V38.41ZM3.72117 42.61H10.0912V43.29H3.72117V42.61ZM12.4304 42.07H18.6404V42.75H12.4304V42.07ZM11.4004 44.87H19.5904V45.56H11.4004V44.87ZM12.4304 38.57H18.5504V39.26H13.2604V42.37H12.4304V38.57ZM26.9196 37.75H27.7096V42.66H26.9196V37.75ZM25.4996 39.82H27.1996V40.5H25.4996V39.82ZM24.9796 37.92H25.7696V42.6H24.9796V37.92ZM20.4996 38.38H23.9896V42.19H20.4996V38.38ZM23.2096 39.03H21.2696V41.53H23.2096V39.03ZM21.7896 43.08H22.6096V44.15H26.9096V43.08H27.7096V46.66H21.7896V43.08ZM22.6096 44.81V45.98H26.9096V44.81H22.6096Z" fill="#D9D9D9"/>
                    <g clip-path="url(#clip0_514_5952)">
                    <path d="M15.5701 26.4489H27.9983M15.5701 26.4489C15.5701 26.7986 15.5012 27.145 15.3673 27.4681C15.2335 27.7913 15.0373 28.0849 14.7899 28.3322C14.5426 28.5796 14.249 28.7757 13.9259 28.9096C13.6027 29.0435 13.2564 29.1123 12.9066 29.1123C12.5568 29.1123 12.2105 29.0435 11.8873 28.9096C11.5642 28.7757 11.2706 28.5796 11.0232 28.3322C10.7759 28.0849 10.5797 27.7913 10.4459 27.4681C10.312 27.145 10.2431 26.7986 10.2431 26.4489C10.2431 26.0991 10.312 25.7528 10.4459 25.4296C10.5797 25.1065 10.7759 24.8128 11.0232 24.5655C11.2706 24.3182 11.5642 24.122 11.8873 23.9882C12.2105 23.8543 12.5568 23.7854 12.9066 23.7854C13.2564 23.7854 13.6027 23.8543 13.9259 23.9882C14.249 24.122 14.5426 24.3182 14.7899 24.5655C15.0373 24.8128 15.2335 25.1065 15.3673 25.4296C15.5012 25.7528 15.5701 26.0991 15.5701 26.4489ZM27.9983 26.4489L24.4476 22.8982M27.9983 26.4489L24.4476 29.9995M8.46875 7.80653C8.46875 8.51293 8.74936 9.19039 9.24886 9.68989C9.74836 10.1894 10.4258 10.47 11.1322 10.47C11.8386 10.47 12.5161 10.1894 13.0156 9.68989C13.5151 9.19039 13.7957 8.51293 13.7957 7.80653C13.7957 7.10014 13.5151 6.42267 13.0156 5.92318C12.5161 5.42368 11.8386 5.14307 11.1322 5.14307C10.4258 5.14307 9.74836 5.42368 9.24886 5.92318C8.74936 6.42267 8.46875 7.10014 8.46875 7.80653ZM15.5701 16.6841C15.5701 17.3905 15.8507 18.068 16.3502 18.5675C16.8497 19.067 17.5271 19.3476 18.2335 19.3476C18.9399 19.3476 19.6174 19.067 20.1169 18.5675C20.6164 18.068 20.897 17.3905 20.897 16.6841C20.897 15.9777 20.6164 15.3003 20.1169 14.8008C19.6174 14.3013 18.9399 14.0206 18.2335 14.0206C17.5271 14.0206 16.8497 14.3013 16.3502 14.8008C15.8507 15.3003 15.5701 15.9777 15.5701 16.6841Z" stroke="#D9D9D9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.5708 16.6842H8.02592C6.74776 16.7095 5.53049 17.235 4.6355 18.1479C3.74052 19.0608 3.2392 20.2882 3.2392 21.5666C3.2392 22.845 3.74052 24.0724 4.6355 24.9853C5.53049 25.8982 6.74776 26.4237 8.02592 26.449H10.2439M20.8977 16.6842H23.5612C24.7384 16.6842 25.8675 16.2166 26.6999 15.3841C27.5323 14.5517 28 13.4227 28 12.2454C28 11.0682 27.5323 9.93917 26.6999 9.10673C25.8675 8.2743 24.7384 7.80664 23.5612 7.80664H13.7926M8.46951 7.80664H3.14258" stroke="#D9D9D9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_514_5952">
                    <rect width="32" height="32" fill="white" transform="translate(2 4)"/>
                    </clipPath>
                    </defs>
                    </svg>

                </MenuItem>
            </Link>
            <Link to="/profile">
                <MenuItem>
                    <svg width="45" height="53" viewBox="0 0 45 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.4688 20.5C30.4882 20.5 31.4658 20.905 32.1867 21.6258C32.9075 22.3467 33.3125 23.3243 33.3125 24.3438V25.625C33.3125 30.6757 28.5462 35.875 20.5 35.875C12.4537 35.875 7.6875 30.6757 7.6875 25.625V24.3438C7.6875 23.3243 8.09247 22.3467 8.81331 21.6258C9.53415 20.905 10.5118 20.5 11.5312 20.5H29.4688ZM29.4688 23.0625H11.5312C11.1914 23.0625 10.8656 23.1975 10.6253 23.4378C10.385 23.678 10.25 24.0039 10.25 24.3438V25.625C10.25 29.3099 13.9195 33.3125 20.5 33.3125C27.0805 33.3125 30.75 29.3099 30.75 25.625V24.3438C30.75 24.0039 30.615 23.678 30.3747 23.4378C30.1345 23.1975 29.8086 23.0625 29.4688 23.0625ZM20.5 3.84375C22.3689 3.84375 24.1613 4.58619 25.4829 5.90773C26.8044 7.22928 27.5469 9.02168 27.5469 10.8906C27.5469 12.7596 26.8044 14.552 25.4829 15.8735C24.1613 17.1951 22.3689 17.9375 20.5 17.9375C18.6311 17.9375 16.8387 17.1951 15.5171 15.8735C14.1956 14.552 13.4531 12.7596 13.4531 10.8906C13.4531 9.02168 14.1956 7.22928 15.5171 5.90773C16.8387 4.58619 18.6311 3.84375 20.5 3.84375ZM20.5 6.40625C19.3107 6.40625 18.1701 6.87871 17.3291 7.71969C16.4881 8.56068 16.0156 9.70129 16.0156 10.8906C16.0156 12.08 16.4881 13.2206 17.3291 14.0616C18.1701 14.9025 19.3107 15.375 20.5 15.375C21.6893 15.375 22.8299 14.9025 23.6709 14.0616C24.5119 13.2206 24.9844 12.08 24.9844 10.8906C24.9844 9.70129 24.5119 8.56068 23.6709 7.71969C22.8299 6.87871 21.6893 6.40625 20.5 6.40625Z" fill="#D9D9D9"/>
                    <path d="M1.85195 43.64H6.00195V49.49H1.85195V43.64ZM5.19195 44.31H2.66195V48.82H5.19195V44.31ZM7.61195 42.74H8.45195V51.78H7.61195V42.74ZM8.25195 46.35H9.93195V47.05H8.25195V46.35ZM16.7612 42.73H17.5912V51.79H16.7612V42.73ZM12.8212 43.43C14.1612 43.43 15.1212 44.66 15.1212 46.58C15.1212 48.51 14.1612 49.74 12.8212 49.74C11.4912 49.74 10.5312 48.51 10.5312 46.58C10.5312 44.66 11.4912 43.43 12.8212 43.43ZM12.8212 44.18C11.9412 44.18 11.3212 45.12 11.3212 46.58C11.3212 48.05 11.9412 49.01 12.8212 49.01C13.7112 49.01 14.3212 48.05 14.3212 46.58C14.3212 45.12 13.7112 44.18 12.8212 44.18ZM25.8204 42.74H26.6204V51.78H25.8204V42.74ZM22.8404 46.18H24.3404V46.91H22.8404V46.18ZM24.0704 42.96H24.8604V51.31H24.0704V42.96ZM18.9804 43.88H23.1104V44.56H18.9804V43.88ZM18.9004 49.56L18.8004 48.86C19.9704 48.86 21.9304 48.82 23.3004 48.64L23.3604 49.25C21.9504 49.52 20.0604 49.56 18.9004 49.56ZM19.7204 44.32H20.4804V49.05H19.7204V44.32ZM21.6004 44.32H22.3604V49.05H21.6004V44.32ZM34.1596 42.73H34.9896V51.79H34.1596V42.73ZM30.2196 43.43C31.5596 43.43 32.5196 44.66 32.5196 46.58C32.5196 48.51 31.5596 49.74 30.2196 49.74C28.8896 49.74 27.9296 48.51 27.9296 46.58C27.9296 44.66 28.8896 43.43 30.2196 43.43ZM30.2196 44.18C29.3396 44.18 28.7196 45.12 28.7196 46.58C28.7196 48.05 29.3396 49.01 30.2196 49.01C31.1096 49.01 31.7196 48.05 31.7196 46.58C31.7196 45.12 31.1096 44.18 30.2196 44.18ZM38.6888 44.03H39.3588V45.5C39.3588 47.41 38.2088 49.33 36.7688 50.04L36.2888 49.38C37.5988 48.76 38.6888 47.06 38.6888 45.5V44.03ZM38.8488 44.03H39.5188V45.5C39.5188 47.03 40.6088 48.59 41.9388 49.16L41.4688 49.82C40.0088 49.14 38.8488 47.38 38.8488 45.5V44.03ZM36.5888 43.66H41.6388V44.36H36.5888V43.66ZM42.8588 42.74H43.6888V51.78H42.8588V42.74Z" fill="#D9D9D9"/>
                    </svg>

                </MenuItem>
            </Link>
            </Menu>
        </Wrapper>
    );
}