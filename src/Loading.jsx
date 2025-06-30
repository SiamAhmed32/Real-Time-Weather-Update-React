const Loading = ({ message }) => {
  return (
    <div className="grid place-items-center h-screen bg-slate-900 text-white">
      <div className="flex flex-col items-center gap-8 w-full max-w-md p-4">
        <div className="w-full flex justify-between items-center p-2">
          <div className="h-8 w-32 bg-slate-800 rounded-md animate-pulse"></div>
          <div className="h-10 w-10 bg-slate-800 rounded-full animate-pulse"></div>
        </div>

        <div className="w-full flex flex-col items-center gap-6 p-6 bg-slate-800/50 rounded-lg">
          <div className="w-24 h-24 bg-slate-700 rounded-full animate-pulse"></div>

          <div className="w-48 h-12 bg-slate-700 rounded-md animate-pulse"></div>
          <div className="w-64 h-8 bg-slate-700 rounded-md animate-pulse"></div>

          <div className="w-full h-px bg-slate-700 my-4 animate-pulse"></div>

          <div className="w-full flex justify-between">
            <div className="w-24 h-6 bg-slate-700 rounded-md animate-pulse"></div>
            <div className="w-24 h-6 bg-slate-700 rounded-md animate-pulse"></div>
          </div>
          <div className="w-full flex justify-between">
            <div className="w-24 h-6 bg-slate-700 rounded-md animate-pulse"></div>
            <div className="w-24 h-6 bg-slate-700 rounded-md animate-pulse"></div>
          </div>
        </div>

        <p className="text-xl font-medium text-slate-400">{message}</p>
      </div>
    </div>
  );
};

export default Loading;
