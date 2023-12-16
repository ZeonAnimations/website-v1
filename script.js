document.addEventListener('DOMContentLoaded', function () {
    const githubProjectsContainer = document.getElementById('githubProjects');

    // Replace with your GitHub username
    const username = 'ZeonAnimations';

    // GitHub API URL for user repositories
    const apiUrl = `https://api.github.com/users/${username}/repos`;

    // Fetch repositories from GitHub
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Filter out forks
            const projects = data.filter(repo => !repo.fork);

            // Update the project list
            githubProjectsContainer.innerHTML = projects.map(repo => `
                <div class="project">
                    <h3>${repo.name}</h3>
                    <p>${repo.description}</p>
                    <a href="${repo.html_url}" target="_blank">View on GitHub</a>
                </div>
            `).join('');
        })
        .catch(error => {
            console.error('Error fetching GitHub data:', error);
            githubProjectsContainer.innerHTML = '<p>Error fetching projects from GitHub.</p>';
        });
});

$(document).ready(function () {
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();

        const target = this.hash;
        const $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });

        // Mobile menu close on click
        if ($('.menu-items').hasClass('show')) {
            $('.menu-items').removeClass('show');
        }
    });

    // Mobile menu toggle
    $('#mobile-menu').on('click', function () {
        $('.menu-items').toggleClass('show');
    });
});

// Set the current year in the footer
const currentYear = new Date().getFullYear();
document.getElementById('current-year').innerText = currentYear;