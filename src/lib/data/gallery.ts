export interface GalleryImage {
  id: string;
  title: string;
  category: "Our Guest House" | "Rooms & Suites" | "Temple & Spirituality" | "Local Life & Culture" | "City Views & Ghats";
  imageUrl: string;
  caption: string;
  aspectRatio: "landscape" | "portrait" | "square";
  locationTag: string;
}

export const galleryCategories = [
  "All",
  "Our Guest House",
  "Rooms & Suites",
  "Temple & Spirituality",
  "Local Life & Culture",
  "City Views & Ghats",
] as const;

export const galleryItems: GalleryImage[] = [
  {
    id: "g-01",
    title: "Mahakaleshwar Temple at Golden Hour",
    category: "Temple & Spirituality",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1VJlo1EnHrp0N68L2sAAj1ocGaM-OnG9p17u1NQ_Qs1x41tsXAQfvnhLIoZIV7ZdQkvGR2e0LJ05AGrAUueC-tnhhwu3rpgGItEV-NSu5cv2qzwvpw5gnB7YahVTJwCevB235Kh4vj7Bpe8BI-Y5En6G0fw03BTXq9r0ESArn9dGjKKECDu3PB7lWSalp-O0qVRZbguG-4Ahos9ViAtcO19f7KRmcKZBF_4Ti-FPGxx77T30krfuWq7sEE",
    caption: "Ancient sacred stone spires of Mahakaleshwar temple kissed by warm golden dusk sunlight over Ujjain.",
    aspectRatio: "landscape",
    locationTag: "Mahakaleshwar Temple • 980m away",
  },
  {
    id: "g-02",
    title: "Twilight Reflections on Ram Ghat",
    category: "City Views & Ghats",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1UFwle2AvR7vCPvoFea-2MoLPjaX7U4tzSeGU1JFaaaEGNx3YU0gqaXHM2vgQRryV3ZXsqjcjSAeGT4OzkYzBUfXONulamG9eP86kVgO9f_ITVUabDgE30s6BA_-OHer7y0Q42YNIzteJT_o_QBNHZ5_t866CjmIO337ZMTb_4sau1agiyorfEeP8dBoV_cLk5sZ2NGQr6pPdBOE4zQ27_VgFemOTjS5NiTlw_XuSJHQcnzVE6d3ZcRnZ8",
    caption: "Devotees and monks gathered quietly on ancient stone ghat steps as sacred lamps float along the Shipra river.",
    aspectRatio: "landscape",
    locationTag: "Ram Ghat, Shipra River",
  },
  {
    id: "g-03",
    title: "Verandah Courtyard at Dusk",
    category: "Our Guest House",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1XAzIoEJBa7XQ2LdAifbfmY4eWB1BkvTVtLHzOn9TgWnUz0pTWTIDT_RAJQ9LkFYHtEWpJGvLoe7ktxOlX8_mq8nKA8B5LGrnFKZHJStwq-PMcGaYmn0gy5U-no-EgEg_h4ds-ZkmasiUKAQTmXFnV6bNrgAeOvsBxbaLw-RM2Wp1WzrCAiQvKAEkG6gOQAguILKwG8E58lhHPoWbgnf4Xqwp-q4aJFMV7SMMwtnEuOwNGRF5aeV7rnAw",
    caption: "Warm evening ambient lanterns, sandstone pavers, and potted marigolds at Mahashivaya Guest House.",
    aspectRatio: "landscape",
    locationTag: "Begampura, Mahashivaya Courtyard",
  },
  {
    id: "g-04",
    title: "Deepstambhas of Harsiddhi Temple",
    category: "Temple & Spirituality",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1XLvvdyU4mroG36b4kwKjdSloGcvD4Eper-3yGieR6wNoXsll3TmJBCa3z-w7x947lz8-qJUF6D0cQmOCwxsW4VPNkwt93iSsTkbzaNzapyJXy30lrIVwUtwNrFD34ZhW1JUaXj5igNWhs5oqEe9dNOoNgphXz_x4YgUTYV-WjIg2eyY6Q0EA3NHDxOP4uXipSmXB1cX_Z98x6PClXFEZKqZNI2UaQTkppkY27gnm2lvFw8hwFgkiFSNV8",
    caption: "Hundreds of mustard oil lamps ablaze on the 50-foot stone deepstambha pillars against an indigo sky.",
    aspectRatio: "portrait",
    locationTag: "Harsiddhi Mata Temple • 1.2km away",
  },
  {
    id: "g-05",
    title: "AC Double Room Suite Sanctuary",
    category: "Rooms & Suites",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1WOp4rbDumPCxwM7OEwy1YFOWgfuBYZQCqT8M0x8sxV9fvxCBKm190NpvSORzb9i7Wqwj5dsCS22budx7oXmrG5aUG-iR2S5bzZQ2iDS0MjVwFrkh4lVMZq4cpGE2f_exw8xIheQY0H3_mL7RmBpNXtg40r3HqVXza5lGEEhnvtJngQj66xyR1_E9sd0LB1v4mfzfy0JNl5z5qfzmhDfpYr_fz-VIoxiX_HNOsBaezMmPUh3LJFhwypWA",
    caption: "Handcrafted solid teak wood double bed with crisp white bedsheets and traditional woven textile runner.",
    aspectRatio: "landscape",
    locationTag: "Room 101 • AC Double Room",
  },
  {
    id: "g-06",
    title: "5-Bed Family Suite with Private Balcony",
    category: "Rooms & Suites",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1VZiqfNDizW_QLEM-VWqctWcnLE9Vx_LOGfSH7aG4-VGaszk1AFyI-JTBgcXEqgcevQ1S6V1NYoMjJ3aUTLVPzXaZIVdtxOB0Jk0xMZcxq8dCaWRIxM5JgXn6Eg1HJYfXzN8TRplFf3-cl1gSbOulrxovPrvzGzTCqt24Hy6RnoEigdUlDwKUscnLk6pBfqwnSbIT2v24rLsc-Qwc5OihFukb6sbciW1yyABz2bpv46eiyGMMZWnVQaDp4",
    caption: "Morning sunlight streaming across the family suite toward the private Indian sandstone carved balcony.",
    aspectRatio: "landscape",
    locationTag: "Room 205 • 5-Bed Balcony Suite",
  },
  {
    id: "g-07",
    title: "Pristine Attached Bathroom & Sandstone Tiles",
    category: "Our Guest House",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1XsSAR_o1-Q89O4k7usL8RbzY2kOrpAYyJmNg8jKG0RCSDh73CkAZyz4buOYOz7tbjspy5KujTjDN12tZlbyyVYH38QGLCHiXMqv3LaRnbNQ0YJO-JOqORSPk2ECC5313TxvBnV2y3tXGiz-v4wwBqc-3nxjVXMAepGVUKtFS408-Tj5t71_XCDmjfUKoamD3Y73xRjKjTDM2yb2JXoBa6R9UL_4NYUEq1IAHgFxIRakYq_LzSUQCZZXQ",
    caption: "Spotless modern bathroom finishes with natural sandstone textures, chrome fittings, and fresh towels.",
    aspectRatio: "landscape",
    locationTag: "Attached Guest Bathroom",
  },
  {
    id: "g-08",
    title: "Entrance of Ancient Kal Bhairav",
    category: "Local Life & Culture",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1XbCXqDj9pnLH7rxKgQW_8FT8XMcXn7qsq6j250T_zrPEwHxCWikcOC3sL50lDsObYsllfKkVl4ZJqHDDZSJZGlmmA7RMNLCCOFeBG_PAMo0tUAfIQ2CbcVgEQojPPU3T7KyYvlt7fPU7-i46x_zfozzSiPB4skLVUDGe5oiHXhUlGFKGE5Qdj9qboNT65TaWtuyCZK5qraAgaO5sbBitEvn8gsD9axQYsTikwH7KkqAs_hgxdCpX0jPII",
    caption: "Vibrant yellow marigold garlands, vermillion tilaks, and morning devotees entering the historic shrine.",
    aspectRatio: "landscape",
    locationTag: "Kal Bhairav Temple",
  },
  {
    id: "g-09",
    title: "Mahakal Lok Grand Architectural Promenade",
    category: "Temple & Spirituality",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1WdRia1wbqt0H2EeLPmC3P3f5rURZbt0VhkCr-UDyOur-1g6NkYZX7dGet8ROlBJEj3CeALbJjG-mRANPsqV8B0hMwQUPpEVWbkLz-h2bVb6NcOeTGrw8sfiUqDLevsIpTEgrkjoNF_EBsKuXFHBBaMgxj7ggOcjS_WN7Vzsk9NU_9vaekQu9ZRtU-n-saLbrHbsT69chDB1JsrYUMDce_Cdj55XVg6-kmSq--vAS31tHo7Zqhs0phyXQ",
    caption: "Carved red sandstone pillars and Shiva lore mural walls at twilight along the sacred corridor.",
    aspectRatio: "landscape",
    locationTag: "Mahakal Lok • 730m from Guest House",
  },
  {
    id: "g-10",
    title: "Tactile Hospitality Linen & Brass Incense",
    category: "Our Guest House",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1V1bNVvT5riendV_E4dV-XMd_ppK_t3CEaaqu_lgDVnjBrw3pYNTM9C_Tiusvl7M2eNvv9j9fYetB_7Ct0yQiwl115c5mtmwYczGyMaD6T38Z5jDxIZbdjg2sb1S54fG3Z9oeYEvvpHt83nBN3aPIkdWJH3MfospVwFVNudFB6W6yL25BID0CMxCOJW85mPRdOxLqwamLDYeXx7euYj6sG554sudotIFfrCZkE7BvtQ1pJ1lEouyWDZnA",
    caption: "Extreme macro detail of handwoven ivory linen sheets, fragrant incense burner, and teak wood.",
    aspectRatio: "landscape",
    locationTag: "In-Room Sanctuary Textures",
  },
];
