import dynamic from "next/dynamic";

const TallyScript = dynamic(() => import("https://tally.so/widgets/embed.js"), { ssr: false });

const TallyEmbed = () => {
return (
<>
<link
     rel="preload"
     as="script"
     href="https://tally.so/widgets/embed.js"
   >
<Script
     async
     src="https://tally.so/widgets/embed.js"
   ></Script>
<script>
{ window.TallyConfig = { "formId": "mVp6M6", "popup": { "width": 800, "emoji": { "text": "👋", "animation": "wave" } } }; }
</script>
</>
);
};

export default TallyEmbed;