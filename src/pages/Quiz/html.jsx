const Html = ({
  question,
  handleSelected,
  selected,
  handleSubmit,
  isSubmitted,
  handleReset,
  correctCount,
}) => {
  return (
    <section>
      <div className="container px-5 mx-auto">
        <h1 className="text-2xl text-center font-semibold mb-4">Quiz</h1>
        <div className="border border-gray-100 shadow p-5 rounded-xl">
          <form onSubmit={handleSubmit}>
            {question.map((item) => {
              const userAnswer = selected[item.id];
              const isCorrect = userAnswer === item.answer;

              return (
                <div
                  key={item.id}
                  className="border-b border-gray-200 pb-5 mb-5"
                >
                  <h3 className="text-lg font-semibold mb-1">
                    {item.question}
                  </h3>
                  <ul>
                    {item.options.map((opt, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name={`option-${item.id}`}
                          id={`option${item.id}-${i}`}
                          value={opt}
                          checked={userAnswer === opt}
                          onChange={() => handleSelected(item.id, opt)}
                          className="text-red-600 focus:ring-red-500"
                          disabled={isSubmitted}
                        />
                        <label
                          htmlFor={`option${item.id}-${i}`}
                          className={`cursor-pointer ${
                            isSubmitted && userAnswer && opt === item.answer
                              ? "text-green-600 font-bold"
                              : isSubmitted && userAnswer === opt && !isCorrect
                              ? "text-red-600 line-through"
                              : "text-black"
                          }`}
                        >
                          {opt}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  type="submit"
                  className="cursor-pointer bg-black text-white font-semibold rounded-lg px-3 py-1"
                  disabled={isSubmitted} 
                >
                  Submit
                </button>
                <button
                  onClick={handleReset}
                  className="cursor-pointer bg-gray-500 text-white font-semibold rounded-lg px-3 py-1"
                >
                  Reset
                </button>
              </div>
              {isSubmitted && (
                <div className="mt-4 text-center font-semibold text-lg">
                  Your score: {correctCount} / {question.length}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Html;
