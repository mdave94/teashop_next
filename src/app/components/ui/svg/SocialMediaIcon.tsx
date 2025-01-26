const SocialMediaIcon = ({ name }: { name: string }) => {
  if (name === "insta") {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0,0,256,256"
        >
          <g
            fill="#ffffff"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
            style={{ mixBlendMode: "normal" }}
          >
            <g transform="scale(5.33333,5.33333)">
              <path d="M15,4c-6.06341,0 -11,4.93659 -11,11v18c0,6.06341 4.93659,11 11,11h18c6.06341,0 11,-4.93659 11,-11v-18c0,-6.06341 -4.93659,-11 -11,-11zM15,6h18c4.98259,0 9,4.01741 9,9v18c0,4.98259 -4.01741,9 -9,9h-18c-4.98259,0 -9,-4.01741 -9,-9v-18c0,-4.98259 4.01741,-9 9,-9zM35,11c-1.105,0 -2,0.895 -2,2c0,1.105 0.895,2 2,2c1.105,0 2,-0.895 2,-2c0,-1.105 -0.895,-2 -2,-2zM24,14c-5.51133,0 -10,4.48867 -10,10c0,5.51133 4.48867,10 10,10c5.51133,0 10,-4.48867 10,-10c0,-5.51133 -4.48867,-10 -10,-10zM24,16c4.43067,0 8,3.56933 8,8c0,4.43067 -3.56933,8 -8,8c-4.43067,0 -8,-3.56933 -8,-8c0,-4.43067 3.56933,-8 8,-8z"></path>
            </g>
          </g>
        </svg>
      </>
    );
  }

  if (name === "fb") {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0,0,256,256"
        >
          <g
            fill="#ffffff"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
            style={{ mixBlendMode: "normal" }}
          >
            <g transform="scale(5.33333,5.33333)">
              <path d="M24,3c-11.58641,0 -21,9.41359 -21,21c0,10.51869 7.75132,19.25021 17.85938,20.76758c0.28812,0.04321 0.58077,-0.04136 0.80142,-0.23162c0.22065,-0.19025 0.34737,-0.46727 0.34702,-0.75862l-0.00977,-14.51953c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1h-3.94727v-3.25781h3.94922c0.5515,-0.00005 0.99887,-0.44655 1,-0.99805l0.00977,-3.45312c0,-0.00065 0,-0.0013 0,-0.00195c0,-2.73359 0.65439,-4.52536 1.73242,-5.64648c1.07803,-1.12112 2.67136,-1.6875 4.90234,-1.6875c1.7629,0 2.43781,0.10519 3.10156,0.18555v2.65039h-2.28125c-1.33754,0 -2.44411,0.75007 -3.01367,1.74414c-0.56956,0.99407 -0.74414,2.17598 -0.74414,3.37695l-0.00977,2.82617c-0.00101,0.26588 0.10389,0.52123 0.29154,0.7096c0.18764,0.18838 0.44258,0.29428 0.70846,0.2943h4.82422l-0.50391,3.25781h-4.32031c-0.55226,0.00006 -0.99994,0.44774 -1,1l0.00781,10.5625c-0.00474,0.36063 0.18507,0.69588 0.49674,0.87737c0.31167,0.18149 0.69692,0.18112 1.00823,-0.00098c0.31131,-0.1821 0.50047,-0.51772 0.49503,-0.87834l-0.00781,-9.56055h4.17578c0.49343,-0.00007 0.91307,-0.35999 0.98828,-0.84766l0.81445,-5.25781c0.04442,-0.2884 -0.03933,-0.58181 -0.22929,-0.80331c-0.18996,-0.2215 -0.46719,-0.34898 -0.75899,-0.34903h-4.98633l0.00586,-1.82617c0,-0.0013 0,-0.0026 0,-0.00391c0,-0.98303 0.18228,-1.86238 0.48047,-2.38281c0.29819,-0.52043 0.57188,-0.73828 1.27734,-0.73828h3.28125c0.55226,-0.00006 0.99994,-0.44774 1,-1v-4.58789c0.00061,-0.50069 -0.36912,-0.92467 -0.86523,-0.99219c-0.57129,-0.07723 -1.88216,-0.25586 -4.23633,-0.25586c-2.58301,0 -4.80728,0.7029 -6.34375,2.30078c-1.53646,1.59788 -2.29102,3.9748 -2.29102,7.0332l-0.00781,2.45313h-3.95117c-0.55226,0.00006 -0.99994,0.44774 -1,1v5.25781c0.00006,0.55226 0.44774,0.99994 1,1h3.94922l0.00781,12.25c-8.56334,-1.84299 -15.00781,-9.38293 -15.00781,-18.50781c0,-10.50559 8.49441,-19 19,-19c10.50559,0 19,8.49441 19,19c0,9.63248 -7.15013,17.57319 -16.42773,18.82813c-0.35421,0.0477 -0.65606,0.28078 -0.79179,0.61142c-0.13573,0.33064 -0.08472,0.70857 0.13381,0.99139c0.21853,0.28282 0.57137,0.42754 0.92555,0.37962c10.25439,-1.38706 18.16016,-10.18702 18.16016,-20.81055c0,-11.58641 -9.41359,-21 -21,-21z"></path>
            </g>
          </g>
        </svg>
      </>
    );
  }

  if (name === "tiktok") {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0,0,256,256"
        >
          <g
            fill="#ffffff"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
            style={{ mixBlendMode: "normal" }}
          >
            <g transform="scale(4,4)">
              <path d="M15.66016,10c-3.11453,0 -5.66016,2.54667 -5.66016,5.66016v32.67969c0,3.11427 2.54588,5.66016 5.66016,5.66016h32.67969c3.11453,0 5.66016,-2.54667 5.66016,-5.66016v-24.33398c0.0005,-0.33766 -0.16942,-0.65277 -0.45182,-0.83789c-0.2824,-0.18511 -0.63914,-0.21523 -0.94857,-0.08008c-6.39744,2.7918 -13.11861,-0.35416 -14.64258,-5.37891c-0.12816,-0.42123 -0.51673,-0.70909 -0.95703,-0.70898h-5c-0.55226,0.00006 -0.99994,0.44774 -1,1v20c0,1.19211 -0.48672,1.84321 -1.13281,2.32031c-0.64609,0.4771 -1.52391,0.67969 -1.86719,0.67969c-0.42678,0 -1.2705,-0.14642 -1.88867,-0.57031c-0.61818,-0.4239 -1.11133,-1.03433 -1.11133,-2.42969c0,-1.3103 0.68298,-1.9419 1.49805,-2.41016c0.81507,-0.46826 1.64844,-0.60156 1.64844,-0.60156c0.48999,-0.0726 0.85301,-0.49294 0.85352,-0.98828v-5c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1c-3.78243,0 -6.39571,1.67369 -7.92969,3.75586c-1.53398,2.08216 -2.07031,4.49242 -2.07031,6.24414c0,1.48802 0.35734,3.89118 1.81055,6.04492c1.4532,2.15375 4.097,3.95508 8.18945,3.95508c3.99536,0 6.62072,-1.84003 8.0957,-3.94727c1.47498,-2.10723 1.9043,-4.36822 1.9043,-5.67383v-10.23633c1.47781,1.22138 3.2029,2.30598 5.79883,2.83789c0.5415,0.1111 1.07054,-0.2378 1.18164,-0.7793c0.1111,-0.5415 -0.2378,-1.07054 -0.7793,-1.18164c-3.22385,-0.66058 -4.89246,-1.97986 -6.46289,-3.69531c-0.27856,-0.30474 -0.71575,-0.40699 -1.10056,-0.25739c-0.38481,0.1496 -0.63814,0.5203 -0.63772,0.93317v12.37891c0,0.80039 -0.36895,2.85008 -1.54297,4.52734c-1.17402,1.67727 -3.04839,3.09375 -6.45703,3.09375c-3.53555,0 -5.39145,-1.38497 -6.53125,-3.07422c-1.1398,-1.68925 -1.46875,-3.7858 -1.46875,-4.92578c0,-1.31727 0.46366,-3.40801 1.67969,-5.05859c1.07617,-1.46075 2.73605,-2.58392 5.32031,-2.83594v3.21289c-0.44291,0.10567 -0.74326,0.10348 -1.49805,0.53711c-1.18493,0.68074 -2.50195,2.05083 -2.50195,4.14453c0,1.95065 0.90189,3.34047 1.98047,4.08008c1.07858,0.7396 2.23331,0.91992 3.01953,0.91992c0.88572,0 2.00803,-0.29742 3.05469,-1.07031c1.04666,-0.7729 1.94531,-2.1218 1.94531,-3.92969v-19h3.35938c2.15222,5.48125 8.96868,8.51604 15.64063,6.37305v22.9668c0,2.03252 -1.62669,3.66016 -3.66016,3.66016h-32.67969c-2.03373,0 -3.66016,-1.62643 -3.66016,-3.66016v-32.67969c0,-2.03251 1.62669,-3.66016 3.66016,-3.66016h32.67969c2.03252,0 3.66016,1.62669 3.66016,3.66016v3.33984c-0.0051,0.36064 0.18438,0.69608 0.49587,0.87789c0.3115,0.18181 0.69676,0.18181 1.00825,0c0.3115,-0.18181 0.50097,-0.51725 0.49587,-0.87789v-3.33984c0,-3.11453 -2.54667,-5.66016 -5.66016,-5.66016z"></path>
            </g>
          </g>
        </svg>
      </>
    );
  }
};
export default SocialMediaIcon;
