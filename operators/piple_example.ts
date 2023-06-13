import { interval, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

interface News {
    topic: 'Business' | 'Games';
    title: string;
}

function generateRandomNews(): News {
    const topics: ('Business' | 'Games')[] = ['Business', 'Games'];
    const titles: string[] = [
        'Lorem Ipsum is simply dummy text',
        "Lorem Ipsum has been the industry's standard",
        'Contrary to popular belief, Lorem Ipsum is not simply random text',
        'There are many variations of passages of Lorem Ipsum available',
        'Lorem Ipsum is therefore always free from repetition',
    ];

    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];

    return {
        topic: randomTopic,
        title: randomTitle,
    };
}

function createRandomNewsEverySecond(): Observable<News> {
    var news = new Observable<News>((s) => {
        setInterval(() => {
            const randomNew = generateRandomNews();
            console.log(randomNew);
            s.next(randomNew);
            console.log('==========================');
        }, 1000);
    });

    return news;
}

var news = createRandomNewsEverySecond();
news.pipe(filter((f) => f.topic === `Games`)).subscribe((s) => console.log(s));
