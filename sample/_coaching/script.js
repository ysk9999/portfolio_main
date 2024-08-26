document.addEventListener('DOMContentLoaded', function () {
    const counselingBtn = document.getElementById('counseling-btn');

    counselingBtn.addEventListener('click', function () {
        alert('無料カウンセリングのお申し込みありがとうございます！担当者から連絡させていただきます。');
    });

    // スムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // #コーチの紹介とクレデンシャル

    // テストモニアルのローテーション
    // const testimonials = [
    //     { text: "このプログラムで人生が180度変わりました！", author: "佐藤美咲さん（33歳、IT企業勤務）" },
    //     { text: "マインドの変革で、ビジネスの成果が飛躍的に向上しました。", author: "山田健太郎さん（46歳、経営者）" },
    //     { text: "自信を持って自分の価値を主張できるようになりました。", author: "鈴木花子さん（29歳、フリーランス）" }
    // ];

    let currentTestimonial = 0;
    const testimonialElement = document.querySelector('.testimonial');

    function rotateTestimonial() {
        const testimonial = testimonials[currentTestimonial];
        testimonialElement.innerHTML = `<p>"${testimonial.text}"</p><span>- ${testimonial.author}</span>`;
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    }

    setInterval(rotateTestimonial, 5000); // 5秒ごとにテストモニアルを切り替え
});

// コーチ紹介
document.addEventListener('DOMContentLoaded', function() {
    // const coaches = {
    //     1: {
    //         name: "山田太郎",
    //         age: 45,
    //         gender: "男性",
    //         personality: "情熱的で分析力に優れる",
    //         credentials: [
    //             "国際コーチ連盟（ICF）認定プロフェッショナルコーチ",
    //             "脳科学応用コーチング修了",
    //             "コーチング経験15年",
    //             "著書：「脳科学で人生を変える」他多数"
    //         ]
    //     },
    //     2: {
    //         name: "佐藤花子",
    //         age: 38,
    //         gender: "女性",
    //         personality: "共感力が高く、温かみのあるアプローチ",
    //         credentials: [
    //             "米国NLP協会認定マスタープラクティショナー",
    //             "ポジティブ心理学コーチング修了",
    //             "キャリアカウンセラー資格保有",
    //             "コーチング経験10年"
    //         ]
    //     },
    //     3: {
    //         name: "鈴木一郎",
    //         age: 52,
    //         gender: "男性",
    //         personality: "論理的で構造化されたコーチングスタイル",
    //         credentials: [
    //             "経営学修士（MBA）",
    //             "シックスシグマブラックベルト",
    //             "元大手企業人事部長",
    //             "ビジネスコーチング経験20年"
    //         ]
    //     },
    //     4: {
    //         name: "田中美咲",
    //         age: 33,
    //         gender: "女性",
    //         personality: "クリエイティブで直感的なアプローチ",
    //         credentials: [
    //             "アート・セラピスト資格保有",
    //             "マインドフルネス指導者養成講座修了",
    //             "TEDxスピーカー",
    //             "コーチング経験7年"
    //         ]
    //     },
    //     5: {
    //         name: "高橋健太",
    //         age: 41,
    //         gender: "男性",
    //         personality: "エネルギッシュでモチベーション重視のスタイル",
    //         credentials: [
    //             "スポーツ心理学修士",
    //             "オリンピック選手のメンタルコーチ経験あり",
    //             "レジリエンス・トレーニング専門家",
    //             "コーチング経験12年"
    //         ]
    //     }
    // };
    const coaches = {
        1: {
            name: "山田太郎",
            age: 45,
            gender: "男性",
            personality: "情熱的で分析力に優れる",
            credentials: [
                "心理学博士",
                "キャリアカウンセラー協会認定",
                "コーチング歴10年以上",
                "著書：「内なる可能性を引き出す」"
            ]
        },
        2: {
            name: "佐藤花子",
            age: 38,
            gender: "女性",
            personality: "共感力が高く、論理的思考も得意",
            credentials: [
                "元Fortune 500企業人事部長",
                "ICF認定コーチ",
                "リーダーシップ開発専門家",
                "著書：「強みを活かすキャリア戦略」"
            ]
        },
        3: {
            name: "鈴木一郎",
            age: 52,
            gender: "男性",
            personality: "戦略的思考に長け、柔軟な発想力を持つ",
            credentials: [
                "ビジネス戦略コンサルタント",
                "MBA取得",
                "経営者向けコーチング経験15年",
                "著書：「データ駆動型意思決定の極意」"
            ]
        },
        4: {
            name: "高橋美咲",
            age: 41,
            gender: "女性",
            personality: "穏やかで洞察力に富む",
            credentials: [
                "臨床心理士",
                "マインドフルネス指導者",
                "ストレス管理専門家",
                "著書：「マインドフルネスで築く自己実現」"
            ]
        },
        5: {
            name: "田中健太",
            age: 36,
            gender: "男性",
            personality: "創造的で行動力がある",
            credentials: [
                "シリコンバレー起業家",
                "TEDxスピーカー",
                "創造性開発ワークショップ講師",
                "著書：「イノベーターの思考法」"
            ]
        },
        6: {
            name: "渡辺真理",
            age: 49,
            gender: "女性",
            personality: "カリスマ性があり、人を鼓舞する力がある",
            credentials: [
                "組織開発コンサルタント",
                "エグゼクティブコーチ資格保有",
                "チームビルディング専門家",
                "著書：「リーダーシップの真髄」"
            ]
        },
        7: {
            name: "小林雄太",
            age: 43,
            gender: "男性",
            personality: "論理的で科学的アプローチを重視する",
            credentials: [
                "脳科学研究者",
                "パフォーマンス心理学専門家",
                "メンタルトレーニング指導者",
                "著書：「脳科学が解き明かすパフォーマンスの秘密」"
            ]
        },
        8: {
            name: "中村愛",
            age: 39,
            gender: "女性",
            personality: "温かみがあり、感情知能に長ける",
            credentials: [
                "EQトレーナー",
                "ポジティブ心理学認定コーチ",
                "ライフバランスコンサルタント",
                "著書：「感情知能を高める7つの習慣」"
            ]
        },
        9: {
            name: "木村達也",
            age: 47,
            gender: "男性",
            personality: "実践的で結果志向",
            credentials: [
                "キャリアチェンジ専門コーチ",
                "元人材紹介会社CEO",
                "転職支援セミナー講師",
                "著書：「成功するキャリアチェンジの法則」"
            ]
        },
        10: {
            name: "斎藤優子",
            age: 44,
            gender: "女性",
            personality: "効率的で体系的な思考の持ち主",
            credentials: [
                "ライフコーチ",
                "タイムマネジメント講師",
                "ストレスマネジメント専門家",
                "著書：「仕事と生活の完璧なバランス」"
            ]
        }
    };
    const coachElements = document.querySelectorAll('.coach');
    const lightbox = document.getElementById('lightbox');
    const coachName = document.getElementById('coach-name');
    const coachDetails = document.getElementById('coach-details');
    const closeBtn = document.querySelector('.close');

    coachElements.forEach(coach => {
        coach.addEventListener('mouseenter', function() {
            const h3 = this.querySelector('h3');
            h3.style.display = 'block';

        });
        coach.addEventListener('mouseleave', function() {
            const h3 = this.querySelector('h3');
            h3.style.display = 'none';
        });
    });
    coachElements.forEach(coach => {
        coach.addEventListener('click', function() {
            const coachId = this.getAttribute('data-coach');
            const coachInfo = coaches[coachId];
            
            coachName.textContent = coachInfo.name;
            coachDetails.innerHTML = `
                <p>年齢: ${coachInfo.age}歳</p>
                <p>性別: ${coachInfo.gender}</p>
                <p>性格: ${coachInfo.personality}</p>
                <h3>資格・経歴:</h3>
                <ul>
                    ${coachInfo.credentials.map(cred => `<li>${cred}</li>`).join('')}
                </ul>
            `;
            
            lightbox.style.display = 'block'; // 最初に表示をブロックに設定
            setTimeout(() => {
                lightbox.classList.add('show'); // フェードインを追加
            }, 10); // 少し遅延を加えてアニメーションを適用
        });
    });

    closeBtn.addEventListener('click', function() {
        lightbox.classList.remove('show'); // フェードアウト
        setTimeout(() => {
            lightbox.style.display = 'none'; // 完全に非表示にする
        }, 500); // アニメーションが終わるまで待つ
    });

    window.addEventListener('click', function(event) {
        if (event.target == lightbox) {
            lightbox.classList.remove('show'); // フェードアウト
            setTimeout(() => {
                lightbox.style.display = 'none'; // 完全に非表示にする
            }, 500); // アニメーションが終わるまで待つ
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        const title = item.querySelector('h3');
        const content = item.querySelector('ul');
        
        content.style.display = 'none'; // 初期状態では内容を非表示に

        title.addEventListener('click', function() {
            if (content.style.display === 'none') {
                content.style.display = 'block';
                title.classList.add('active');
            } else {
                content.style.display = 'none';
                title.classList.remove('active');
            }
        });
    });
});

// クライアントの声
document.addEventListener('DOMContentLoaded', function() {
    const clientVoices = document.querySelectorAll('.client-voice');
    const prevButton = document.getElementById('prev-voice');
    const nextButton = document.getElementById('next-voice');
    const dotsContainer = document.getElementById('client-voices-dots');
    let currentVoice = 0;
    let intervalId;

    function showVoice(index) {
        clientVoices.forEach((voice, i) => {
            if (i === index) {
                voice.classList.add('active');
            } else {
                voice.classList.remove('active');
            }
        });
        updateDots();
    }

    function rotateClientVoice() {
        currentVoice = (currentVoice + 1) % clientVoices.length;
        showVoice(currentVoice);
    }

    function startAutoRotation() {
        stopAutoRotation();
        intervalId = setInterval(rotateClientVoice, 2000);
    }

    function stopAutoRotation() {
        if (intervalId) {
            clearInterval(intervalId);
        }
    }

    // 初期表示
    showVoice(currentVoice);
    startAutoRotation();

    // ナビゲーションボタンの設定
    prevButton.addEventListener('click', function() {
        stopAutoRotation();
        currentVoice = (currentVoice - 1 + clientVoices.length) % clientVoices.length;
        showVoice(currentVoice);
        startAutoRotation();
    });

    nextButton.addEventListener('click', function() {
        stopAutoRotation();
        currentVoice = (currentVoice + 1) % clientVoices.length;
        showVoice(currentVoice);
        startAutoRotation();
    });

    // インジケーターの追加
    clientVoices.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.addEventListener('click', () => {
            stopAutoRotation();
            currentVoice = index;
            showVoice(currentVoice);
            startAutoRotation();
        });
        dotsContainer.appendChild(dot);
    });

    function updateDots() {
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentVoice);
        });
    }

    // マウスオーバー時に自動切り替えを停止
    const clientVoicesSection = document.getElementById('client-voices');
    clientVoicesSection.addEventListener('mouseenter', stopAutoRotation);
    clientVoicesSection.addEventListener('mouseleave', startAutoRotation);
});

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-list dt');

    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('active');
            const dd = this.nextElementSibling;
            
            if (dd.classList.contains('active')) {
                dd.classList.remove('active');
                dd.style.maxHeight = '0px';
            } else {
                dd.classList.add('active');
                dd.style.maxHeight = dd.scrollHeight + "px";
            }

            // 他の開いている項目を閉じる（アコーディオン動作）
            faqItems.forEach(otherItem => {
                if (otherItem !== this) {
                    otherItem.classList.remove('active');
                    const otherDd = otherItem.nextElementSibling;
                    otherDd.classList.remove('active');
                    otherDd.style.maxHeight = '0px';
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const features = document.querySelectorAll('.feature');
    
    features.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            const ul = this.querySelector('ul');
            // ul.style.transform = 'translateY(0)';
            ul.style.opacity = '1';
        });
        
        feature.addEventListener('mouseleave', function() {
            const ul = this.querySelector('ul');
            // ul.style.transform = 'translateY(100%)';
            ul.style.opacity = '0';
        });
    });
});
