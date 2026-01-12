const urlk = new URL(location.href)
const movieId = urlk.searchParams.get("id")
const movieTitle = urlk.searchParams.get("title")
const APILINK = 'http://localhost:8000/api/v1/reviews/';

//variables from html
const cardBlock = document.getElementById('section-block')
const title = document.getElementById('title')

title.innerText = movieTitle || '';

returnReviews(APILINK)



function returnReviews(url){
    fetch(url + "movie/" + movieId)
    .then(res => res.json().then(data => ({ ok: res.ok, data })))
    .then(function({ok, data}){
        if (!ok) {
            console.error(data);
            const errDiv = document.createElement('div');
            errDiv.className = 'error';
            errDiv.textContent = data && data.error ? data.error : 'Failed to load reviews';
            cardBlock.appendChild(errDiv);
            return;
        }

        if (!Array.isArray(data)) {
            console.warn('Unexpected response format', data);
            const msg = document.createElement('div');
            msg.textContent = 'No reviews available';
            cardBlock.appendChild(msg);
            return;
        }

        data.forEach(review => {
            const div_card = document.createElement('div');
            div_card.innerHTML = `
            <div class="row">
                <div class="columns">
                    <div class="card" id="${review._id}">
                        <p><strong>Review: </strong>${escapeHtml(review.review)}</p>
                        <p><strong>User: </strong>${escapeHtml(review.user)}</p>
                        <p><a href="#" data-id="${review._id}" class="edit">✏️</a>
                            <a href="#" data-id="${review._id}" class="delete">🗑️</a>
                        </p>
                    </div>
                </div>
            </div>
            `
            cardBlock.appendChild(div_card);
        });

        // attach event delegation for edit/delete
        cardBlock.addEventListener('click', function(e){
            const el = e.target;
            if (el.classList.contains('edit')) {
                e.preventDefault();
                const id = el.getAttribute('data-id');
                const card = document.getElementById(id);
                const reviewText = card.querySelector('p:nth-of-type(1)')?.textContent.replace('Review: ','') || '';
                const userText = card.querySelector('p:nth-of-type(2)')?.textContent.replace('User: ','') || '';
                editReview(id, reviewText.trim(), userText.trim());
            }
            if (el.classList.contains('delete')) {
                e.preventDefault();
                const id = el.getAttribute('data-id');
                deleteReview(id);
            }
        }, { once: false });

    })
    .catch(function(err){
        console.error(err);
        const errDiv = document.createElement('div');
        errDiv.className = 'error';
        errDiv.textContent = 'Error fetching reviews';
        cardBlock.appendChild(errDiv);
    })
}

function escapeHtml(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/[&<>"']/g, function(m){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]; });
}

// console.log(returnMovies())