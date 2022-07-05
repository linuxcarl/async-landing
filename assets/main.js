const urlApi = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCxmbtHyTXqntoC2HrHIvyxA&part=snippet%2Cid&order=date&maxResults=9'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd7b88b8801mshd17f1ac39a58234p1d848cjsn3454289e2a78',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
const content = document.getElementById('content-video');
(async ()=>{
    try {
        const response = await fetch(urlApi, options);
        const {items:videos} = await response.json();
        console.log(videos[0].snippet.title)
        let view = `${videos.map(video=>`
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                    </h3>
                </div>
                </div> `
            ).slice(0,4).join('')}`
        console.log(view)

            content.innerHTML = view;
    } catch (error) {
            console.error(error)
    }
})()