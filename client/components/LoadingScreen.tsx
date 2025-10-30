export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative w-24 h-24 mb-8 mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-600 rounded-full animate-pulse"></div>
          <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              VSE
            </div>
          </div>
        </div>

        {/* Loading Spinner */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-transparent border-b-secondary rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1s'}}></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Powering Your Future
        </h2>
        <p className="text-gray-600 mb-6">
          Loading sustainable energy solutions...
        </p>

        {/* Loading Progress */}
        <div className="w-64 h-1 bg-gray-300 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-primary to-secondary animate-pulse" style={{width: '70%'}}></div>
        </div>
      </div>
    </div>
  );
}
