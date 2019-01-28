{{#if questions}}
  <ul class="questions">
    {{#each questions}}
      <div class="card">
        <div class="card-content">
          <a class="card-title" href="/question/{{id}}">
            {{ content }}
          </a>
        </div>
        <div class="card-action">
          <a href="/user/{{ author.id }}" class="">{{ author.email }}</a>
          <span class="question__date">{{ createdAt }}</span>
          <span class="question_answers">{{ answers.length }} Answers</span>
        </div>
      </div>
    {{/each}}
  </ul>
{{/if}}